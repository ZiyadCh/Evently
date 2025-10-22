const menuClosed = document.getElementById("navbar");
const menuBtn = document.getElementById("menu");
let change = false;
let openMenu = () => {
  change = !change;
  if (change == true) {
    menuClosed.id = "dropdown";
    menuBtn.style.transform = "rotate(90deg)";
  } else {
    menuClosed.id = "navbar";
    menuBtn.style.transform = "rotate(0)";
  }
};
