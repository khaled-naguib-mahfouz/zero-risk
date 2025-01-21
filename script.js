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

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
    console.log("scrolled");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
        console.log("ss");
    } else {
        scrollToTopBtn.classList.remove('show');
        console.log("aa");
    }
};

// When the user clicks the button, scroll to the top
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
// function reorderDivs() {
//     console.log("dsadsa");
//     let screenSize = window.matchMedia("(max-width: 991px)"); // Medium screens (Bootstrap md)
//     let studioRow = document.getElementById("studioRow");
//     let firstDiv = document.getElementById("firstDiv");
//     let secondDiv = document.getElementById("secondDiv");

//     if (screenSize.matches) {
//       if (studioRow.firstChild !== secondDiv) {
//         studioRow.insertBefore(secondDiv, firstDiv);
//       }
//     } else {
//       if (studioRow.firstChild !== firstDiv) {
//         studioRow.insertBefore(firstDiv, secondDiv);
//       }
//     }
//   }

//   // Run on page load
//   reorderDivs();

//   // Run on window resize
//   window.addEventListener("resize", reorderDivs);