document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("navToggler");
    const togglerIcon = document.getElementById("togglerIcon");
console.log("ss");
    toggler.addEventListener("click", function () {
        if (togglerIcon.classList.contains("bi-list")) {
            togglerIcon.classList.remove("bi-list");
            togglerIcon.classList.add("bi-x"); // Change to "X"
        } else {
            togglerIcon.classList.remove("bi-x");
            togglerIcon.classList.add("bi-list"); // Change back to hamburger
        }
    });
});
