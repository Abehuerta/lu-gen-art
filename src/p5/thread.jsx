export default function (s) {
  // thread
  let i;
  //color of thread
  let color;
  let pointOne;
  let pointTwo;

  s.setup = function () {
    s.createCanvas(400, 400);
    s.background(0);

    i = 0;
    s.colorMode(s.HSB);
    color = s.random(0, 255);
    pointOne = [200, 200];
    pointTwo = [200, 200];
  };

  s.draw = function () {
    color += s.random(-1, 2);
    s.stroke(color, 100, 100);

    pointTwo = newPoint(pointOne);

    s.line(pointOne[0], pointOne[1], pointTwo[0], pointTwo[1]);

    pointOne = [pointTwo[0], pointTwo[1]];

    i++;
    if (i > 2000) {
      s.noLoop();
    }
  };

  function newPoint(oldPoint) {
    let length = s.random(1, 5);
    let angle = s.random(0, 360);
    s.angleMode(s.DEGREES);

    let x = oldPoint[0] + s.cos(angle) * length;
    let y = oldPoint[1] + s.sin(angle) * length;

    return [x, y];
  }
}
