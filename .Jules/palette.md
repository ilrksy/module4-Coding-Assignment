## 2026-10-12 - Surface Console Output to UI
**Learning:** Purely console-based output is inaccessible to non-technical users and screen readers. We must ensure application functionality provides visible and accessible output on the page itself.
**Action:** Always provide a DOM element (like an `aria-live` region) to display results that are typically sent only to the console, ensuring feedback is perceivable by all users.
