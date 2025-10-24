document.addEventListener("DOMContentLoaded", () => {
  const filterCategorie = document.getElementById("filter-categorie");
  const filterDate = document.getElementById("filter-date");
  const filterLieu = document.getElementById("filter-lieu");
  const allEvents = document.querySelectorAll(".events-card-item");

  function filterEvents() {
    const selectedCategorie = filterCategorie.value.trim().toLowerCase();
    const selectedDate = filterDate.value.trim().toLowerCase();
    const selectedLieu = filterLieu.value.trim().toLowerCase();

    allEvents.forEach((event) => {
      const eventCategorie = event.dataset.categorie.trim().toLowerCase();
      const eventDate = event.dataset.date.trim().toLowerCase();
      const eventLieu = event.dataset.lieu.trim().toLowerCase();

      const matchCategorie =
        selectedCategorie === "all" || selectedCategorie === eventCategorie;
      const matchDate = selectedDate === "all" || selectedDate === eventDate;
      const matchLieu = selectedLieu === "all" || selectedLieu === eventLieu;

      if (matchCategorie && matchDate && matchLieu) {
        event.style.display = "";
      } else {
        event.style.display = "none";
      }
    });
  }

  filterCategorie.addEventListener("change", filterEvents);
  filterDate.addEventListener("change", filterEvents);
  filterLieu.addEventListener("change", filterEvents);
});
