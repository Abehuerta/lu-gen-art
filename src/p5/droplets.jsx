export default function (s) {
  var circlesno = [];

  let r = 255;
  let g = 255;
  let b = 255;

  function randomColor() {
    r = s.random(0, 255);
    g = s.random(0, 255);
    b = s.random(0, 255);
  }

  s.setup = function () {
    s.createCanvas(400, 400);
    s.background(0);

    randomColor();

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
}
