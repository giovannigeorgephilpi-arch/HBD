const btn = document.querySelector(".btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

btn.addEventListener("click", () => {
  img1.classList.add("drop");

  setTimeout(() => {
    img1.style.display = "none";
    img2.style.opacity = "1";
    img2.style.height = "400px";
    img2.style.width = "250px";
  }, 1000);
});
