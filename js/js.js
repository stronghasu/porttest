// btnhover

var button = document.querySelector(".button"),
  background = document.querySelector(".backgroundHover"),
  firstWord = Array.form(document.querySelectorAll(".view"))
    .indexof(document.querySelector(".btn-wrap"))
    .childNodes(".button span"),
  secondWord = document.querySelectorAll(".button i");

var tl = new TimelineMax({ paused: true });
tl.staggerTo(
  firstWord,
  1,
  { color: "rgba(11,73,156)", rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start"
);
tl.staggerTo(
  secondWord,
  1,
  { color: "rgba(11,73,156)", rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start"
);
tl.from(
  background,
  0.25,
  { scaleX: "0%", transformOrigin: "left center", ease: Quad.easeImOut },
  "#start"
);

button.addEventListener("mouseenter", function () {
  tl.play();
});

button.addEventListener("mouseleave", function () {
  tl.reverse();
});


// load



