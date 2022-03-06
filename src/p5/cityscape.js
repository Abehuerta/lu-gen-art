export default function (s) {
  s.setup = function () {
    s.createCanvas(400, 400);
    s.background(0);
  };

  s.draw = function () {
    for (var j = 0; j < 10; j++) {
      var x = s.random(500);
      var y = s.random(100, 675);
      var h = s.random(50, 400);
      var w = h * s.random(0.3, 0.7);
      s.fill(s.random(25, 200), 300);
      s.rect(x, y, w, h);
      s.noLoop();
    }
    for (var i = 0; i < 200; i++) {
      var x = s.random(s.width);
      var y = s.random(s.height);
      var r = s.random(5, 50);
      s.fill(255, 50, 0, 100);
      s.noStroke();
      s.ellipse(x, y, r * 2, r * 2);
      s.noLoop();
    }
  };
}
