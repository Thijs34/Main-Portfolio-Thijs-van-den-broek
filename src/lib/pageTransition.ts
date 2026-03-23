/**
 * Fades the current page out to the site background colour, then navigates.
 * The new page fades in via the CSS `page-enter` animation on <body>.
 */
export const navigateTo = (url: string, durationMs = 300) => {
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "#0a0f1c",
    zIndex: "9999",
    opacity: "0",
    transition: `opacity ${durationMs}ms ease`,
    pointerEvents: "all",
  });
  document.body.appendChild(overlay);

  // Double rAF ensures the element is painted before the transition starts
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      overlay.style.opacity = "1";
      setTimeout(() => {
        window.location.href = url;
      }, durationMs + 20);
    })
  );
};
