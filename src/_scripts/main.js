"use strict";

import GLightbox from "./glightbox";
import SmoothScroll from "./smoothscroll";

(() => {
  const navDotEl = document.getElementsByClassName("nav-dot")[0];

  const helloNavEl = document.getElementsByClassName("nav-item-hello")[0];
  const aboutNavEl = document.getElementsByClassName("nav-item-about")[0];
  const expNavEl = document.getElementsByClassName("nav-item-exp")[0];
  const skillsNavEl = document.getElementsByClassName("nav-item-skills")[0];
  const contactNavEl = document.getElementsByClassName("nav-item-contact")[0];

  const helloSectionEl = document.getElementsByClassName("section-hello")[0];
  const aboutSectionEl = document.getElementsByClassName("section-about")[0];
  const expSectionEl = document.getElementsByClassName("section-exp")[0];
  const skillsSectionEl = document.getElementsByClassName("section-skills")[0];
  const contactSectionEl = document.getElementsByClassName(
    "section-contact"
  )[0];

  const slideHelloEl = document.getElementsByClassName("slide-hello")[0];
  const slideAboutEl = document.getElementsByClassName("slide-about")[0];
  const slideExpEl = document.getElementsByClassName("slide-exp")[0];
  const slideSkillsEl = document.getElementsByClassName("slide-skills")[0];
  const slideContactEl = document.getElementsByClassName("slide-contact")[0];

  const deviceType = window.innerWidth > 991 ? "desktop" : "mobile";
  let scrollingDest = "";

  function scrollingAnimation() {
    const scroll = window.scrollY - window.innerHeight / 2;

    if (scroll > skillsSectionEl.offsetTop) {
      if (scrollingDest !== "contact") {
        setFlag("contact");
        removeCssClasses();
        addClass(slideContactEl);
        addClass(contactNavEl);
        dotAnimation(deviceType, "12.6vw", "1140%");
      }
    } else if (scroll > expSectionEl.offsetTop) {
      if (scrollingDest !== "exp") {
        setFlag("exp");
        removeCssClasses();
        addClass(slideSkillsEl);
        addClass(skillsNavEl);
        dotAnimation(deviceType, "9.85vw", "430%");
      }
    } else if (scroll > aboutSectionEl.offsetTop) {
      if (scrollingDest !== "skills") {
        setFlag("skills");
        removeCssClasses();
        addClass(slideExpEl);
        addClass(expNavEl);
        dotAnimation(deviceType, "7.15vw", "-130%");
      }
    } else if (scroll > helloSectionEl.offsetTop) {
      if (scrollingDest !== "about") {
        setFlag("about");
        removeCssClasses();
        addClass(slideAboutEl);
        addClass(aboutNavEl);
        dotAnimation(deviceType, "4.45vw", "-670%");
      }
    } else {
      if (scrollingDest !== "hello") {
        setFlag("hello");
        removeCssClasses();
        addClass(slideHelloEl);
        addClass(helloNavEl);

        dotAnimation(deviceType, "1.75vw", "-1340%");
      }
    }
  }

  function dotAnimation(deviceType, positionDesktop, positionMobile) {
    switch (deviceType) {
      case "desktop":
        moveDotTopDown(positionDesktop);
        break;
      case "mobile":
        moveDotLeftRight(positionMobile);
        break;
    }
  }

  function moveDotTopDown(position) {
    navDotEl.style.top = position;
  }

  function moveDotLeftRight(position) {
    navDotEl.style.transform = "translateX(" + position + ")";
  }

  function addClass(el) {
    el.classList.add("active");
  }

  function setFlag(flag) {
    scrollingDest = flag;
  }

  function removeCssClasses() {
    slideHelloEl.classList.remove("active");
    slideAboutEl.classList.remove("active");
    slideExpEl.classList.remove("active");
    slideSkillsEl.classList.remove("active");
    slideContactEl.classList.remove("active");
    helloNavEl.classList.remove("active");
    aboutNavEl.classList.remove("active");
    expNavEl.classList.remove("active");
    skillsNavEl.classList.remove("active");
    contactNavEl.classList.remove("active");
  }

  document.addEventListener("scroll", scrollingAnimation);

  const glightbox = GLightbox({ selector: "for-glightbox" });
  const smoothScroll = new SmoothScroll('a[href*="#"]');
})();
