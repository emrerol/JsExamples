const panels = document.querySelectorAll(".panel");
const open = "open";
const openActive = "open-active";

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((panel) => panel.classList.remove(open, openActive));
    panel.classList.add(open);
    panel.classList.add(openActive);
  });
});
