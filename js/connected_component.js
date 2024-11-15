let source;
let visited;
let canvas;

function preload() {
  source = loadImage("images/bibhabasu.png");
}

function setup() {
  // Get the container width

  let canvas = createCanvas(source.width, source.height);
  canvas.parent('p5-canvas');
  pixelDensity(1);
  
  // Resize the source image to match canvas
  // source.resize(targetWidth, targetHeight);
  source.loadPixels();
  
  visited = Array(source.width * source.height).fill(false);
}

function draw() {
  background(0);
  image(source, 0, 0);

  if (mouseX >= 0 && mouseX < source.width && mouseY >= 0 && mouseY < source.height) {
    let startX = floor(mouseX);
    let startY = floor(mouseY);
    let loc = (startX + startY * source.width) * 4;

    let r = source.pixels[loc];
    let g = source.pixels[loc + 1];
    let b = source.pixels[loc + 2];
    let intensity = (r + g + b) / 3;

    let threshold = 30;
    visited.fill(false);
    floodFill(startX, startY, intensity, threshold);

    loadPixels();
    for (let x = 0; x < source.width; x++) {
      for (let y = 0; y < source.height; y++) {
        let idx = x + y * source.width;
        if (visited[idx]) {
          let pix = (x + y * source.width) * 4;
          pixels[pix] = 0;
          pixels[pix + 1] = 0;
          pixels[pix + 2] = 255;
          pixels[pix + 3] = 255;
        }
      }
    }
    updatePixels();
  }
}

function floodFill(x, y, intensity, threshold) {
  let stack = [[x, y]];

  while (stack.length > 0) {
    let [cx, cy] = stack.pop();
    if (cx < 0 || cy < 0 || cx >= source.width || cy >= source.height) continue;
    let idx = cx + cy * source.width;
    if (visited[idx]) continue;

    let loc = (cx + cy * source.width) * 4;
    let r = source.pixels[loc];
    let g = source.pixels[loc + 1];
    let b = source.pixels[loc + 2];
    let currIntensity = (r + g + b) / 3;

    if (abs(currIntensity - intensity) < threshold) {
      visited[idx] = true;
      stack.push([cx + 1, cy]);
      stack.push([cx - 1, cy]);
      stack.push([cx, cy + 1]);
      stack.push([cx, cy - 1]);
    }
  }
}

function windowResized() {
  let container = select('#p5-canvas');
  let containerWidth = container.width;
  
  let maxWidth = 300; // same as in setup
  let targetWidth = Math.min(containerWidth, maxWidth);
  let targetHeight = (targetWidth / source.width) * source.height;
  
  resizeCanvas(targetWidth, targetHeight);
  source.resize(targetWidth, targetHeight);
  source.loadPixels();
  visited = Array(source.width * source.height).fill(false);
}