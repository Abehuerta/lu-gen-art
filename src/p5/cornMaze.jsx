import * as lib from "./lib";

export default function cornMazeSetup(flash, colorScheme) {
  return function (s) {
    let x = 0;
    let y = 0;
    let spacing = 10;

    var r;
    var g;
    var b;

    let i = 10;
    let j = 10;
    let k = 10;

    let bounds = 0;

    s.setup = function () {
      s.createCanvas(400, 400);

      if (flash) {
        s.background(0);
      } else {
        s.background(255);
      }

      switch (colorScheme) {
        case "mono":
          [r, g, b] = lib.randomColors(s);
          break;
        case "pastel":
          [r, g, b] = lib.pastelColors(s);
          bounds = 140;
          break;
        case "vibrant":
          [r, g, b] = lib.vibrantColors(s);
          break;
        case "rainbow":
          [r, g, b] = lib.randomColors(s);
          break;
        case "baw":
          [r, g, b] = lib.blackAndWhite(s);
          break;
        default:
          break;
      }
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

        if (r > 255 || r < bounds) {
          //Bounding i, j, k between 0 -255
          i *= -1;
        }
        if (g > 255 || g < bounds) {
          j *= -1;
        }
        if (b > 255 || b < bounds) {
          k *= -1;
        }
      }
      if (y > s.height - 1) {
        s.noLoop();
      }
    };
  };
}
