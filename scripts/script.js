document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    const scrollbox = document.getElementById('scrollbox_container');

    // Funktion zur Überprüfung der Bildschirmbreite und Anpassung des Scrollverhaltens
    function updateScrollBehavior() {
        if (window.innerWidth > 855) {
            // Horizontales Scrollen aktivieren
            scrollbox.style.overflowX = "auto";
            scrollbox.style.overflowY = "hidden";

            // Event-Listener für horizontales Scrollen hinzufügen
            scrollbox.addEventListener('wheel', handleHorizontalScroll);
        } else {
            // Vertikales Scrollen aktivieren
            scrollbox.style.overflowX = "hidden";
            scrollbox.style.overflowY = "auto";

            // Event-Listener für horizontales Scrollen entfernen
            scrollbox.removeEventListener('wheel', handleHorizontalScroll);
        }
    }

    // Funktion für horizontales Scrollen
    function handleHorizontalScroll(e) {
        if (e.deltaY !== 0) {
            scrollbox.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    }

    // Initialer Aufruf und Event-Listener für Fensteränderungen
    updateScrollBehavior();
    window.addEventListener('resize', updateScrollBehavior);
});