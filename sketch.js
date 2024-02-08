// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

let thoughts = [
  "now feels like eternity",
  "we escaped through a bug in time",
  "a bug that allowed us to be",
  "a perfect bug",
];

let thought;

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
  fontsize = 32,
  x,
  y; // x and y coordinates of the text

let img;
let img2;

let poemPositionX;
let poemPositionY;

let poemOnDisplay;

function preload() {
  font = loadFont("Poppins-Medium.ttf");
  img = loadImage("digideer.jpg");
  img2 = loadImage("digidear/Paint Layer 11.PNG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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

  thought = random(thoughts);

  //
  textSize(fontsize);
  bounds = font.textBounds(thought, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;

  poemPositionX = width / 2;
  poemPositionY = height / 2;
  setInterval(changePoemPosition, 5000);

  poemOnDisplay = poems[0];
}

function modelReady() {
  select("#status").html("Model Loaded");
}

function mousePressed() {
  console.log(JSON.stringify(poses));
}

function draw() {
  // image(video, 0, 0, width, height);
  // strokeWeight(2);
  background(0);

  // tint(255, 180);
  imageMode(CENTER);
  
  image(img, width / 2, height / 2);
  //  image(img,width/3,height/2);

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    let pose = poses[0].pose;

    // Create a pink ellipse for the nose
    fill(213, 0, 143);
    let nose = pose["nose"];
    ellipse(nose.x, nose.y, 20, 20);

    // check if the mouse is inside the bounding box and tickle if so
    if (
      nose.x >= bounds.x &&
      nose.x <= bounds.x + bounds.w &&
      nose.y >= bounds.y &&
      nose.y <= bounds.y + bounds.h
    ) {
      thought = random(thoughts);
      imageMode(CENTER);

      image(img2,  nose.x, height / 2);

      x += random(-5, 5);
      y += random(-5, 5);
    }
  }

  fill(255);
  // textAlign(CENTER);

  text(thought, x, y);
  bounds = font.textBounds(thought, x, y, fontsize);

  //backgroundText
  push();
  fill(120);
  textSize(24);

  for (i = 0; i < poem.length; i++) {
    text(poemOnDisplay[i], poemPositionX, poemPositionY + i * 28);
  }
  pop();
}

function changePoemPosition() {
  poemPositionX = random(width);
  poemPositionY = random(height);
  let newPoem = Math.floor(Math.random()*3);
  poemOnDisplay = poems[newPoem];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
