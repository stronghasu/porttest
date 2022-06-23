import { SVG } from "https://cdn.skypack.dev/svg";
import { gsap } from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";

const svg = SVG(".canvas");
const circles = [];

generate();

function generate() {
  svg.clear();

  // create 20 circles that animate to a random x, y, scale, and fill
  for (let i = 0; i < 20; i++) {
    const circle = svg
      .circle(32)
      .cx(100)
      .cy(100)
      .fill("hsl(0, 100%, 100%").node;

    // animate the circle element to a random position on the canvas, with a random fill color and scale value
    gsap.to(circle, {
      x: "random(-100, 100, true)",
      y: "random(-100, 100, true)",
      scale: "random(0.25, 1, true)",
      ease: "elastic.out(1, 0.5)",
      duration: 1.5,
      delay: "random(0, 0.2, true)",
      attr: {
        fill: () => `hsl(${gsap.utils.random(0, 360)}, 75%, 75%)`,
      },
      repeat: -1,
      repeatDelay: 1.5,
      repeatRefresh: true,
    });
  }
}
