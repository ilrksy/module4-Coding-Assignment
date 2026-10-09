## 2026-10-09 - [Vanilla JS DOM Script Loading]
**Learning:** When adding DOM manipulation to vanilla JS scripts that were previously only logging to console, ensure scripts are loaded at the bottom of the body, not in head, to prevent null reference errors on element selection.
**Action:** Always check script placement when retrofitting UI output onto legacy console-only vanilla HTML/JS applications.
