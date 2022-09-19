const accordion = document.querySelector(".accordion");
const accordionItems = document.querySelectorAll(".item");

accordion.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".item");

  if (!clicked) return;

  if (clicked.classList.contains("open")) {
    clicked.classList.remove("open");
    return;
  }

  // close active tabs
  accordionItems.forEach((item) => item.classList.remove("open"));

  // active the selected one
  clicked.classList.toggle("open");
});
