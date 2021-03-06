var tileSize = 100;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100);
  showGrid();
}

function showGrid() {
  for(var i=0; i<8; i++) {
    for(var j=0; j<8; j++) {
      if((i+j)%2 == 0) {
        fill("#DEB887");
      } else {
        fill("#805232");
      }
      rect(i*tileSize, j*tileSize, tileSize, tileSize);
    }
  }
}
