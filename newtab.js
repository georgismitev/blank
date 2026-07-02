const note = document.getElementById("note");

// Every new tab starts clean: just the prompt at the top, nothing restored.
note.textContent = "You drive.";
note.focus();

// Put the blinking cursor at the very end so you type straight after it.
placeCaretAtEnd(note);

function placeCaretAtEnd(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// Cmd/Ctrl+B toggles bold on the selection (or at the caret for what's typed next).
note.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "b") {
    e.preventDefault();
    document.execCommand("bold");
  }
});

// On paste, keep bold but strip every other style so pasted text still matches
// the page. A plain textarea couldn't preserve bold at all — this can.
note.addEventListener("paste", (e) => {
  e.preventDefault();
  const html = e.clipboardData.getData("text/html");
  const text = e.clipboardData.getData("text/plain");
  if (html) {
    document.execCommand("insertHTML", false, sanitize(html));
  } else {
    document.execCommand("insertText", false, text);
  }
});

// Allow only bold emphasis through; drop colors, fonts, sizes, links, etc.
const EMPHASIS = { B: "b", STRONG: "b" };
const BLOCK = /^(DIV|P|LI|H[1-6]|BLOCKQUOTE|TR|SECTION|ARTICLE|UL|OL)$/;

function isBold(el) {
  const w = el.style && el.style.fontWeight;
  if (w === "bold" || w === "bolder") return true;
  const n = parseInt(w, 10);
  return !Number.isNaN(n) && n >= 600;
}

function sanitize(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return serialize(doc.body);
}

function serialize(node) {
  let out = "";
  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      out += escapeHtml(child.nodeValue);
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const tag = child.tagName;
      if (tag === "BR") { out += "<br>"; return; }
      if (tag === "SCRIPT" || tag === "STYLE") return;
      const inner = serialize(child);
      if (EMPHASIS[tag] || isBold(child)) {
        out += `<b>${inner}</b>`;
      } else {
        out += inner;
        if (BLOCK.test(tag)) out += "<br>";
      }
    }
  });
  return out;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
