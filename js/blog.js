const grid = document.querySelector(".blog-carte-grid");
let loadMore = () => {
  grid.className = "blog-carte-grid-load";
  document.getElementById("afficher").style.display = "none";
  document.getElementById("reculer").style.display = "block";
};
let loadLess = () => {
  grid.className = "blog-carte-grid";
  document.getElementById("reculer").style.display = "none";
  document.getElementById("afficher").style.display = "block";
};
