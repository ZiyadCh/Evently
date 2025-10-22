const menuClosed = document.getElementById("navbar");
const menuBtn = document.getElementById("menu");
let change = false;
let openMenu = () => {
  change = !change;
  if (change == true) {
    menuClosed.id = "dropdown";
  } else {
    menuClosed.id = "navbar";
  }
};
