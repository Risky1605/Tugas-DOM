const btn = document.querySelectorAll(".imagebtn .btn");
const bungkus = document.querySelectorAll("section");
const data = document.querySelectorAll(".table");
const nama = document.querySelectorAll("h1");

btn.forEach((tekan, index) => {
  tekan.addEventListener("click", () => {
    data[index].classList.toggle("tampil");
    nama[index].classList.toggle("pindah");
    bungkus[index].classList.toggle("menyala");
  });
});
