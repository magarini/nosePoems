let windowAspect;
let w, h;

let elementW,elementH;
let sceneW,sceneH;

let video;
let poseNet;
let poses = [];

//images
let elements=[];
let elementIndex=0;

let scenes=[];
let sceneIndex=0;

let textHighlighter;

//texts
let thought;

let thoughts = [
  "now feels like eternity",
  "we escaped through a bug in time",
  "a bug that allowed us to be",
  "a perfect bug",
];

let poem = [
  "we turn our thoughts to the internet",
  "we direct our thoughts to this space",
  "which breaks into a thousand pieces",
  "that each one has in his pocket",
  "my thoughts so deep in your pocket",
  "that you may never find them",
];

let poem2 = [
  "on my screen I can be a goddess and make her whatever I want",
  "if I speak in languages she can understand",
  "something always gets lost in translation",
  "something is always lost in language",
];

let poem3 = [
  "i am an extra poem",
];

let poems = [poem, poem2,poem3];

let message = "breaks into a thousand pieces",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 24,
  x,
  y; // x and y coordinates of the text


let poemPositionX;
let poemPositionY;

let poemOnDisplay;

function preload() {
  font = loadFont("Poppins-Medium.ttf");

  textHighlighter=loadImage("digidear/Paint Layer 9.PNG");

  let element0=loadImage("digidear/iridescentweb1.jpg.PNG");
  let element1=loadImage("digidear/laptop_PNG5932.png.PNG");
  let element2=loadImage("digidear/Paint Layer 2.PNG");
  let element3=loadImage("digidear/Paint Layer 3.PNG");
  let element4=loadImage("digidear/Paint Layer 4.PNG");
  let element5=loadImage("digidear/Paint Layer 5.PNG");
  let element6=loadImage("digidear/Paint Layer 4.PNG");
  let element7=loadImage("digidear/Paint Layer 6.PNG");
  let element8=loadImage("digidear/Paint Layer 7.PNG");
  let element9=loadImage("digidear/Paint Layer 8.PNG");
  // to change
  let element10=loadImage("tumblr.jpg");
  let element11=loadImage("digidear/Paint Layer 10.PNG");
  let element12=loadImage("digidear/Paint Layer 11.PNG");
  let element13=loadImage("desk.jpg");


  elements=[element0,element1,element2,element3,element4,element5,element6,element7,element8,element9,element10,element11,element12,element13];

  let scene0=loadImage("desk.jpg");
  let scene1=loadImage("digideer.jpg");
  let scene2=loadImage("tumblr.jpg");
  scenes=[scene0,scene1,scene2]

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowAspect = width / height;
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();



  //nose Interaction
  thought = random(thoughts);
  textSize(fontsize);
  bounds = font.textBounds(thought, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;

  //poemPosition
  poemPositionX = width / 2;
  poemPositionY = height / 2;
  poemOnDisplay = poems[0];


  //timeRenewal
  setInterval(changePoemPosition, 8000);
  setInterval(addelementture, 5000);
  setInterval(restart,10000)



//initial scene
let imageAspect = scenes[sceneIndex].width / scenes[sceneIndex].height;
  // This code naively crops the bottom or right edge of the image as necessary. Obviously there are other ways to limit the image size.
  if (windowAspect >= imageAspect) {
    // Our window is wider than our image, we need to constrain the height of the image
    sceneW = scenes[sceneIndex].width;
    sceneH = sceneW/ windowAspect;
  } else {
    // Our window is narrower than or image, we need to constrain the width of the image
    sceneH = scenes[sceneIndex].height;
    sceneW = sceneH * windowAspect;
  }
  // imageMode(CENTER);
  image(scenes[sceneIndex], 0, 0, windowWidth, windowHeight, 0, 0,sceneW, sceneH);

}

function modelReady() {
  select("#status").html("Model Loaded");
}

function mousePressed() {
  console.log(JSON.stringify(poses));
}

function draw() {

  imageMode(CENTER);
 



  //time-based poem
  push();
  fill(120);
  textSize(18);
  imageMode(CENTER);
  image(textHighlighter, poemPositionX, poemPositionY);

  for (i = 0; i < poem.length; i++) {
    textAlign(CENTER);
  text(poemOnDisplay[i], poemPositionX, poemPositionY + i * 24);
  }
  pop();

  //adding elements
  for (i=0; i<elementIndex; i++){
    let imageAspect = elements[elementIndex].width / elements[elementIndex].height;
  // This code naively crops the bottom or right edge of the image as necessary. Obviously there are other ways to limit the image size.
  if (windowAspect >= imageAspect) {
    // Our window is wider than our image, we need to constrain the height of the image
    elementW = elements[elementIndex].width;
    elementH =  elementW / windowAspect;
  } else {
    // Our window is narrower than or image, we need to constrain the width of the image
    elementH = elements[elementIndex].height;
    elementW = elementH * windowAspect;
  }

  imageMode(CORNER);
  image(elements[elementIndex],0, 0, windowWidth, windowHeight, 0, 0, elementW, elementH);
  }


    // For one pose only (use a for loop for multiple poses!)
    if (poses.length > 0) {
      let pose = poses[0].pose;
  
      // Create a pink ellipse for the nose
      fill('#9fa5ba');
      let nose = pose["nose"];
      noStroke();
      ellipse(nose.x, nose.y, 20, 20);
  
      // check if the mouse is inside the bounding box and tickle if so
      if (
        nose.x >= bounds.x &&
        nose.x <= bounds.x + bounds.w &&
        nose.y >= bounds.y &&
        nose.y <= bounds.y + bounds.h
      ) {
        // imageMode(CENTER);
        // image(elements[8],  nose.x, nose.y);
        thought = random(thoughts);
        x += random(-5, 5);
        y += random(-5, 5);
      }
    }
  
    //interactive poem
    fill('#5f6a8d');
    imageMode(CENTER);

    image(textHighlighter,  x, y);
    text(thought, x, y);
    bounds = font.textBounds(thought, x, y, fontsize);


}

function changePoemPosition() {
  poemPositionX = random(width);
  poemPositionY = random(height);
  let newPoem = Math.floor(Math.random()*3);
  poemOnDisplay = poems[newPoem];
}


function addelementture(){
  elementIndex++;
  if (elementIndex>=elements.length){
    elementIndex=0;
  }
}


function restart(){
  // clear()
  
imageAspect = scenes[sceneIndex].width / scenes[sceneIndex].height;
  // This code naively crops the bottom or right edge of the image as necessary. Obviously there are other ways to limit the image size.
  if (windowAspect >= imageAspect) {
    // Our window is wider than our image, we need to constrain the height of the image
    w = scenes[sceneIndex].width;
    h = w / windowAspect;
  } else {
    // Our window is narrower than or image, we need to constrain the width of the image
    h = scenes[sceneIndex].height;
    w = h * windowAspect;
  }
  imageMode(CORNER);
  image(scenes[sceneIndex], 0, 0, windowWidth, windowHeight, 0, 0, w, h);
  sceneIndex++;

  if (sceneIndex>=scenes.length){
    sceneIndex=0;
  }

  console.log('restarted',scenes[sceneIndex])

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowAspect = width / height;

}
