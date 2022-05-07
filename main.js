const moreBtn = document.querySelector(".info .metadata .title .moreBtn");
const title = document.querySelector(".info .metadata .title .text");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
