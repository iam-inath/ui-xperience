let shareBton = document.querySelector("button");
const contactInfo = document.querySelector(".bottom-contact");
let shareMobile = document.querySelector(".bottom-share");
let shareDesktop = document.querySelector(".bottom-share-desktop");
const minMobileSize = 767;
const minDesktopSize = 768;

shareBton.addEventListener("click", () => {
   if (window.innerWidth <= minMobileSize) {
      contactInfo.style.display = "none";
      shareMobile.style.display = "block";
   } else if (window.innerWidth >= minDesktopSize) {
      shareDesktop.style.display = "block";
   }
});
