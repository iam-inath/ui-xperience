const hamburgerBtn = document.querySelector(".icon-menu");
const closeMenuBtn = document.querySelector(".icon-menu-close");
const navlinksMobile = document.querySelector(".navlinks__mobile");
let navLinks = document.querySelectorAll(".navlinks__mobile li"); // replace with your actual selector

if (window.innerWidth < 768) {
   hamburgerBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // prevent the document click event from firing
      hamburgerBtn.style.display = "none";
      closeMenuBtn.style.display = "block";
      navlinksMobile.style.display = "block";
   });

   closeMenuBtn.addEventListener("click", () => {
      hamburgerBtn.style.display = "block";
      closeMenuBtn.style.display = "none";
      navlinksMobile.style.display = "none";
   });

   document.addEventListener("click", () => {
      hamburgerBtn.style.display = "block";
      closeMenuBtn.style.display = "none";
      navlinksMobile.style.display = "none";
   });
   navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (event) => {
         event.stopPropagation(); // prevent the document click event from firing
         hamburgerBtn.style.display = "block";

         closeMenuBtn.style.display = "none";
         navlinksMobile.style.display = "none";
      });
   });
}
