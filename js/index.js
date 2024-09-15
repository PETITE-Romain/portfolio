const btnSisr = document.getElementById('btn_sisr');
const btnSlam = document.getElementById('btn_slam');
const sisrContainer = document.querySelector(".spe_sisr");
const slamContainer = document.querySelector(".spe_slam");

console.log(sisrContainer);

console.log(btnSisr, btnSlam);


btnSisr.addEventListener("click", () => {
    sisrContainer.classList.toggle("hide_sisr_box")
});

btnSlam.addEventListener("click", () => {
    slamContainer.classList.toggle("hide_slam_box")
});