document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav");

    hamburger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });



const scrollbox = document.getElementById('scrollbox_container');
scrollbox.addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        this.scrollLeft += e.deltaY;
        e.preventDefault();
    }
});

});