import * as lib from "./lib";

// flowfield

export default function featherSetup(flash, colorScheme) {
  return function (s) {
    var points = [];

    var r1;
    var r2;
    var g1;
    var g2;
    var b1;
    var b2;

    var mult;

    s.setup = () => {
      s.createCanvas(400, 400);
      if (flash) {
        s.background(0);
      } else {
        s.background(255);
      }
      s.angleMode(s.DEGREES);
      s.noiseDetail(1);

      var density = 50;
      var space = s.width / density;

      for (var x = 0; x < s.width; x += space) {
        for (var y = 0; y < s.height; y += space) {
          var p = s.createVector(x + s.random(-10, 10), y + s.random(-10, 10));
          points.push(p);
        }
      }
      switch (colorScheme) {
        case "mono":
          [r1, g1, b1] = lib.randomColors(s);
          [r2, g2, b2] = lib.randomColors(s);
          break;
        case "pastel":
          [r1, g1, b1] = lib.pastelColors(s);
          [r2, g2, b2] = lib.pastelColors(s);
          break;
        case "vibrant":
          [r1, g1, b1] = lib.vibrantColors(s);
          [r2, g2, b2] = lib.vibrantColors(s);
          break;
        case "random":
          [r1, g1, b1] = lib.randomColors(s);
          [r2, g2, b2] = lib.randomColors(s);
          break;
        case "baw":
          [r1, g1, b1] = lib.blackAndWhite(s);
          [r2, g2, b2] = lib.blackAndWhite(s);
          break;
        default:
          break;
      }

      mult = s.random(0.002, 0.01);
    };

    s.draw = function () {
      s.noStroke();
      for (var i = 0; i < points.length; i++) {
        var r = s.map(points[i].x, -50, s.width + 50, r1, r2);
        var g = s.map(points[i].y, -50, s.height + 50, g1, g2);
        var b = s.map(points[i].x, -50, s.width + 50, b1, b2);
        // var alpha

        s.fill(r1, g1, b1);

        var angle = s.map(
          s.noise(points[i].x * mult, points[i].y * mult),
          0,
          1,
          0,
          s.width
        );

        points[i].add(s.createVector(s.cos(angle), s.sin(angle)));

        s.ellipse(points[i].x, points[i].y, 1);
        // if (s.dist(s.width / 2, s.height / 2, points[i].x, points[i].y) < 200) {
        //   s.ellipse(points[i].x, points[i].y, 1);
        // }
      }
    };
  };
}
