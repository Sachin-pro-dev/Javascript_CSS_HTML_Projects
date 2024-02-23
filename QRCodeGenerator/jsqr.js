const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return;
  generateBtn.innerText = "Generating QR code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
//
const darkWrapper = document.querySelector(".wrapper");
const p = document.querySelector("p");
const input = document.getElementById("input");

//!
//!
//!
document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";
// const sun =
//   "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// const moon =
//   "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";
const sun = "sun.png";
const moon = "moon1.png";

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}
function setLight() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty("--bs-dark", "#212529");
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}
//
themeIcon.addEventListener("click", () => {
  darkWrapper.classList.toggle("dark-mode");
  //   p.style.color = "white";
  //   input.style.background = "grey";
  p.classList.toggle("p-dark");
  input.classList.toggle("input-dark");
  input.classList.toggle("dark-mode-input");
});
