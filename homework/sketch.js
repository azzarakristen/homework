let vid;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1)
  vid = createVideo(
    ['video/video.mp4'],
    vidLoad
  );

  vid.size(1080, 1920);
  vid.hide();
}

function draw() {


vid.loadPixels();
let numPixels = 4 * vid.width * vid.height;
for (let i = 0; i < numPixels; i += 4) {
  
  let r= vid.pixels[i]
  let g= vid.pixels[i+1]
  let b= vid.pixels[i+2]
  let a= vid.pixels[i+3]
  
  r=vid.pixels[i+10]
  g=vid.pixels[i+100]
  b=vid.pixels[i+50]
  a=100
  // Red.
  vid.pixels[i] = vid.pixels[i+10];
  // Green.
  vid.pixels[i + 1] = vid.pixels[i+100];
  // Blue.
  vid.pixels[i + 2] = vid.pixels[i+50];
  // Alpha.
  vid.pixels[i + 3] = 100;
  if (r>100){
    stroke(255)
    rect(250, 50, 50, 50)
  }
  if (g>220){
    stroke(255)
    rect(150, 300, 50, 50)
  }
  if (b<50){
    stroke(255)
    rect(50, 500, 50, 50)
  }
  if (r>150 && g>150 && b<150){
    ellipse(150, 300, 50)
  }

}
  
vid.updatePixels();
  

  
image(vid, 0, 0, 350, 600);
  
  
  for(let x=0; x<200; x++){
    for(let y=0; y<10; y++){
      let currentColor = get(x*3, y*2)
      noStroke()
      fill(currentColor)
      rect(x*3, y*2, 3)
    }
  }

}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}

