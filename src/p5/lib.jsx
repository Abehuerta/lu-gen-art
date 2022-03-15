export function randomColors(s) {
  let r = s.random(0, 255);
  let g = s.random(0, 255);
  let b = s.random(0, 255);

  return [r, g, b];
}

export function pastelColors(s) {
  let r = s.random(140, 255);
  let g = s.random(140, 255);
  let b = s.random(140, 255);

  return [r, g, b];
}

export function vibrantColors(s) {
  let colors = [0, 255, s.random(0, 255)];

  let r = colors.splice(s.random(0, 3), 1)[0];
  let g = colors.splice(s.random(0, 2), 1)[0];
  let b = colors[0];

  return [r, g, b];
}

export function blackAndWhite(s) {
  let color = s.random(0, 255);

  let r = color;
  let g = color;
  let b = color;

  return [r, g, b];
}
