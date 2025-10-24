document.addEventListener("DOMContentLoaded", () => {
    const filterCategorie = document.getElementById("filter-categorie");
    const filterDate = document.getElementById("filter-date");
    const filterLieu = document.getElementById("filter-lieu");
    const allEvents = document.querySelectorAll(".events-card-item");

    function filterEvents() {
    const selectedCategorie = filterCategorie.value.toLowerCase();
    const selectedDate = filterDate.value.toLowerCase();
    const selectedLieu = filterLieu.value.toLowerCase();

    allEvents.forEach((event) => {
        const eventCategorie = event.dataset.categorie.toLowerCase();
        const eventDate = event.dataset.date.toLowerCase();
        const eventLieu = event.dataset.lieu.toLowerCase();

        const matchCategorie = selectedCategorie === "all" || selectedCategorie === eventCategorie;
        const matchDate = selectedDate === "all" || selectedDate === eventDate;
        const matchLieu = selectedLieu === "all" || selectedLieu === eventLieu;

        event.style.display = matchCategorie && matchDate && matchLieu ? "block" : "none";
    });
    }

    filterCategorie.addEventListener("change", filterEvents);
    filterDate.addEventListener("change", filterEvents);
    filterLieu.addEventListener("change", filterEvents);
});
