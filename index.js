

const menuLinks = document.querySelector("#menu-links");
const checkbox = document.querySelector("#check");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    menuLinks.style.maxHeight = "180px";
  } else {
    menuLinks.style.maxHeight = "0px";
  }
});

const navBar = document.querySelector("nav");
const logo = document.querySelector(".bx-home")

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 180) {
    navBar.style.backgroundColor = "#fff";
    navBar.style.boxShadow = "0 0 10px #0005";
    if (logo.classList.contains("logo-main")) {
      logo.classList.remove("logo-main");
    }
    logo.classList.add("logo-next")
  } else {
    navBar.style.backgroundColor = "#fff5";
    navBar.style.boxShadow = "";
    if (logo.classList.contains("logo-next")) {
      logo.classList.remove("logo-next");
    }
    logo.classList.add("logo-main")
  }
});
