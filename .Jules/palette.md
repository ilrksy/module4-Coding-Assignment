## 2026-10-05 - Expose Console Output in the DOM
**Learning:** Console-only applications exclude mobile users and people utilizing screen readers since dev tools are not readily accessible.
**Action:** When working with educational or script-based apps that rely on `console.log`, mirror the output in a live ARIA region within the DOM (`aria-live="polite"`) to ensure immediate visibility and accessibility for all users.
