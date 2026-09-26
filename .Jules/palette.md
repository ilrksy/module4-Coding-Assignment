## 2024-09-26 - Console Output as Accessibility Barrier
**Learning:** For users relying on screen readers or those unable to comfortably open browser developer tools, relying solely on `console.log` for core application output is a significant accessibility and UX barrier. It hides the primary functionality of the app.
**Action:** Always ensure that core application output is rendered visually in the DOM. Using an `aria-live` region allows screen readers to announce dynamic content updates as they occur, providing a more inclusive experience.
