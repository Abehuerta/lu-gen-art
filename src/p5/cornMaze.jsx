import * as lib from "./lib";

export default function (s) {
  let x = 0;
  let y = 0;
  let spacing = 10;

  var r;
  var g;
  var b;

  let i = 10;
  let j = 10;
  let k = 10;

  s.setup = function () {
    s.createCanvas(400, 400);
    s.background(0);

    [r, g, b] = lib.vibrantColors(s);
  };

  function row() {
    while (x < s.width) {
      if (s.random(1) < 0.5) {
        s.line(x, y, x + 10, y + spacing);
      } else {
        s.line(x, y + spacing, x + spacing, y);
      }
      x = x + spacing;
    }
  }

  s.draw = function () {
    s.strokeWeight(3);
    s.stroke(r, g, b);
    row();
    if (x > s.width - 1) {
      x = 0;
      y = y + spacing;

      //iterate RGB every new line
      r += i;
      g += j;
      b += k;

      //Bounding i, j, k between 140 -255
      if (r > 255 || r < 140) {
        i *= -1;
      }
      if (g > 255 || g < 140) {
        j *= -1;
      }
      if (b > 255 || b < 140) {
        k *= -1;
      }
    }
    if (y > s.height - 1) {
      s.noLoop();
    }
  };
}
