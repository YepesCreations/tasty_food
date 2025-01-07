/* ================================================
                                                show menu 
================================================ */
// We get the div tag with the "nav__menu" class and the div tag with the "nav__toggle" class
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  //   Validate that variables exist
  if (toggle && nav) {
    // We add the "show__menu" class to the div tag with the "nav__menu" class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show__menu");
    });
  }
};
// We call the function with the parameters 'nav-toggle' and 'nav-menu'
showMenu("nav-toggle", "nav-menu");

/* ================================================
                                    Remove menu mobile
================================================ */
// We get all the elements with the class "nav__link"
const navLink = document.querySelectorAll(".nav__link");

// We create the function linkAction that will be executed when we click on each nav__link and remove the "show__menu" class
function linkAction() {
  // We get the div tag with the "nav__menu" class
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show__menu");
}

// We add the click event to each nav__link
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ================================================
                                    Scroll sections with active link
================================================ */
// We get all the sections that have an ID
const sections = document.querySelectorAll("section[id]");

// We create the function scrollActive that will add the class "active__link" to the link that is currently active
function scrollActive() {
  // We get the current scroll position
  const scrollY = window.pageYOffset;

  // We create the forEach loop to go through each section
  sections.forEach((current) => {
    // We get the height and the top position of each section
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    // We get the ID of each section
    sectionId = current.getAttribute("id");

    // We check if the scroll position is greater than the top position of the section and less than the top position of the section plus the height of the section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // We add the class "active__link" to the link that has the same ID as the section
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active__link");
    } else {
      // We remove the class "active__link" to the link that has the same ID as the section
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active__link");
    }
  });
}

// We add the scroll event to the window and call the scrollActive function
window.addEventListener("scroll", scrollActive);

/* ================================================
                                    Change background header
================================================ */
// We create the function scrollHeader that will add the class "scroll__header" to the header when we scroll
function scrollHeader() {
  // We get the header tag
  const header = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the class "scroll__header" to the header tag
  if (this.scrollY >= 200) header.classList.add("scroll__header");
  else header.classList.remove("scroll__header");
}

// We add the scroll event to the window and call the scrollHeader function
window.addEventListener("scroll", scrollHeader);

/* ================================================
                                    Show scroll top
================================================ */
// We create the function scrollTop that will add the class "show__scroll" to the a tag with the "scrolltop" class
function scrollTop() {
  // We get the div tag with the "scrolltop" class
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the div tag with the scrolltop class
  if (this.scrollY >= 560) scrollTop.classList.add("show__scroll-top");
  else scrollTop.classList.remove("show__scroll-top");
}

// We add the scroll event to the window and call the scrollTop function
window.addEventListener("scroll", scrollTop);


/* ================================================
                                            Dark Light Theme
================================================ */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun");

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
}




themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});