const liste = document.querySelector(".liste");
const btnResponsive = document.querySelector(".btn-responsive");

btnResponsive.addEventListener("click", () => {
  liste.classList.toggle("show")
})

document.addEventListener("resize", () => {
  if(window.innerWidth > 650) {
    liste.classList.remove("show");
  }
})