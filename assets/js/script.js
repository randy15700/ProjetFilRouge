// serch nav
const wrapper = document.getElementById("searchWrapper");
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});