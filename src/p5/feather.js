// flowfield
export default function (s) {
  var points = [];

  var r1;
  var r2;
  var g1;
  var g2;
  var b1;
  var b2;

  var mult;

  s.setup = function () {
    s.createCanvas(400, 400);
    s.background(0);
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
    r1 = s.random(255);
    r2 = s.random(255);
    g1 = s.random(255);
    g2 = s.random(255);
    b1 = s.random(255);
    b2 = s.random(255);

    mult = s.random(0.002, 0.01);
  };

  s.draw = function () {
    s.noStroke();
    for (var i = 0; i < points.length; i++) {
      var r = s.map(points[i].x, 0, s.width, r1, r2);
      var g = s.map(points[i].y, 0, s.height, g1, g2);
      var b = s.map(points[i].x, 0, s.width, b1, b2);
      // var alpha

      s.fill(r, g, b);

      var angle = s.map(
        s.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        s.width
      );

      points[i].add(s.createVector(s.cos(angle), s.sin(angle)));

      if (s.dist(s.width / 2, s.height / 2, points[i].x, points[i].y) < 200) {
        s.ellipse(points[i].x, points[i].y, 1);
      }
    }
  };
}
