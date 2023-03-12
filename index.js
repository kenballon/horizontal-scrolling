// hero-sideways-scroll-section
// hero__sideways-outer
// hero__sideways-scroll-inner
// slider-item

const heroSection = ".hero-sideways-scroll-section";
const sidewayScrollInner = ".hero__sideways-scroll-inner";

// function to call for horizontal scrolling with Vanilla JS
const horizontalScrollTrigger = (parentSection, innerHorizontalWrapper) => {
  // get browser window width
  let getBrowserWidth = window.innerWidth;
  let getSliderTotalLength = document.querySelector(
    innerHorizontalWrapper
  ).scrollWidth;
  let getDistFromTop = document.querySelector(parentSection).offsetTop;

  // calculate the scroll length
  let theScrollLength = getDistFromTop + getSliderTotalLength - getBrowserWidth;

  // set hero section height dynamically based on the length of the slider
  document.querySelector(
    parentSection
  ).style.height = `${getSliderTotalLength}px`;

  // event listner when scrolling a certain section wherein the Horizontal Scrolling will hapen
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop >= getDistFromTop && scrollTop <= theScrollLength) {
      document.querySelector(
        innerHorizontalWrapper
      ).style.transform = `translateX(-${scrollTop - getDistFromTop}px)`;
    }
  });
};

horizontalScrollTrigger(heroSection, sidewayScrollInner);
