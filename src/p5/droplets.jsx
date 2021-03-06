import * as lib from "./lib";

export default function dropletsSetup(flash, colorScheme) {
  return function (s) {
    var circlesno = [];

    let r = 255;
    let g = 255;
    let b = 255;

    s.setup = function () {
      s.createCanvas(400, 400);
      if (flash) {
        s.background(0);
      } else {
        s.background(255);
      }

      switch (colorScheme) {
        case "pastel":
          [r, g, b] = lib.pastelColors(s);
          break;
        case "vibrant":
          [r, g, b] = lib.vibrantColors(s);
          break;
        case "random":
          [r, g, b] = lib.randomColors(s);
          break;
        case "baw":
          [r, g, b] = lib.blackAndWhite(s);
          break;
        default:
          break;
      }

      var protection = 0;

      while (circlesno.length < 500) {
        // Pick a random circle
        var circle = {
          x: s.random(s.width),
          y: s.random(s.height),
          r: s.random(6, 50),
        };

        // Does it overlap any previous circles?
        var overlapping = false;
        for (var j = 0; j < circlesno.length; j++) {
          var other = circlesno[j];
          var d = s.dist(circle.x, circle.y, other.x, other.y);
          if (d < circle.r + other.r) {
            overlapping = true;
          }
        }

        // If not keep it!
        if (!overlapping) {
          circlesno.push(circle);
        }

        // Are we stuck?
        protection++;
        if (protection > 10000) {
          break;
        }
      }

      for (var i = 0; i < circlesno.length; i++) {
        switch (colorScheme) {
          case "pastel":
            [r, g, b] = lib.pastelColors(s);
            break;
          case "vibrant":
            [r, g, b] = lib.vibrantColors(s);
            break;
          case "random":
            [r, g, b] = lib.randomColors(s);
            break;
          case "baw":
            [r, g, b] = lib.blackAndWhite(s);
            break;
          default:
            break;
        }
        s.fill(r, g, b);
        s.noStroke();
        s.ellipse(
          circlesno[i].x,
          circlesno[i].y,
          circlesno[i].r * 2,
          circlesno[i].r * 2
        );
      }
    };
  };
}
