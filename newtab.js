const note = document.getElementById("note");
const KEY = "blank-note";

// Restore saved text.
note.value = localStorage.getItem(KEY) || "";

// Put the cursor at the end so you continue where you left off.
note.focus();
note.selectionStart = note.selectionEnd = note.value.length;

// Save on every change. localStorage is synchronous and shared across
// all new tabs of this profile, so notes stay in sync.
note.addEventListener("input", () => {
  localStorage.setItem(KEY, note.value);
});

// If another tab edits the note, reflect it here without stealing focus.
window.addEventListener("storage", (e) => {
  if (e.key === KEY && e.newValue !== note.value) {
    const pos = note.selectionStart;
    note.value = e.newValue || "";
    note.selectionStart = note.selectionEnd = Math.min(pos, note.value.length);
  }
});
