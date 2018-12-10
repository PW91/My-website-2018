// Main javascript entry point
// Should handle bootstrapping/starting application

"use strict";

import $ from "jquery";
import Link from "../_modules/link/link";

$(() => {
  new Link(); // Activate Link modules logic

  const helloSectionEl = document.getElementsByClassName("section-hello")[0];
  const aboutSectionEl = document.getElementsByClassName("section-about")[0];
  const expSectionEl = document.getElementsByClassName("section-exp")[0];
  const skillsSectionEl = document.getElementsByClassName("section-skills")[0];
  const contactSectionEl = document.getElementsByClassName(
    "section-contact"
  )[0];

  const forHelloEl = document.getElementsByClassName("for-hello")[0];
  const forAboutEl = document.getElementsByClassName("for-about")[0];
  const forExpEl = document.getElementsByClassName("for-exp")[0];
  const forSkillsEl = document.getElementsByClassName("for-skills")[0];
  const forContactEl = document.getElementsByClassName("for-contact")[0];

  const helloNavEl = document.getElementsByClassName("nav-item-hello")[0];
  const aboutNavEl = document.getElementsByClassName("nav-item-about")[0];
  const expNavEl = document.getElementsByClassName("nav-item-exp")[0];
  const skillsNavEl = document.getElementsByClassName("nav-item-skills")[0];
  const contactNavEl = document.getElementsByClassName("nav-item-contact")[0];

  const navDotEl = document.getElementsByClassName("nav-dot")[0];

  let scrollingFlag = "";

  document.addEventListener("scroll", () => {
    const scroll = window.scrollY - window.innerHeight / 2;
    if (scroll > skillsSectionEl.offsetTop) {
      if (scrollingFlag !== "contact") {
        setFlag("contact");
        removeClasses();
        setClassList(forContactEl);
        setClassList(contactNavEl);
        moveDot("12.6vw");
      }
    } else if (scroll > expSectionEl.offsetTop) {
      if (scrollingFlag !== "exp") {
        setFlag("exp");
        removeClasses();
        setClassList(forSkillsEl);
        setClassList(skillsNavEl);
        moveDot("9.85vw");
      }
    } else if (scroll > aboutSectionEl.offsetTop) {
      if (scrollingFlag !== "skills") {
        setFlag("skills");
        removeClasses();
        setClassList(forExpEl);
        setClassList(expNavEl);
        moveDot("7.15vw");
      }
    } else if (scroll > helloSectionEl.offsetTop) {
      if (scrollingFlag !== "about") {
        setFlag("about");
        removeClasses();
        setClassList(forAboutEl);
        setClassList(aboutNavEl);
        moveDot("4.45vw");
      }
    } else {
      if (scrollingFlag !== "hello") {
        setFlag("hello");
        removeClasses();
        setClassList(forHelloEl);
        setClassList(helloNavEl);
        moveDot("1.75vw");
      }
    }
  });

  function moveDot(where) {
    navDotEl.style.top = where;
  }

  function setClassList(el) {
    el.classList.add("active");
  }

  function setFlag(flag) {
    scrollingFlag = flag;
  }

  function removeClasses() {
    forHelloEl.classList.remove("active");
    forAboutEl.classList.remove("active");
    forExpEl.classList.remove("active");
    forSkillsEl.classList.remove("active");
    forContactEl.classList.remove("active");

    helloNavEl.classList.remove("active");
    aboutNavEl.classList.remove("active");
    expNavEl.classList.remove("active");
    skillsNavEl.classList.remove("active");
    contactNavEl.classList.remove("active");
  }
});
