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

let poemIndex=0;

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
  "the presence of my friends is an idea",
  "which is materialized on the internet",
  "I open  messenger and touch your voicemail"
];

let poem4 = [
  "the presence of my friends is an idea",
  "which is materialized on the internet",
  "I open  messenger and touch your voicemail"
];

let poem5 = [
  "many messages remain unread on the doorstep",
  "of the digital bubble that surrounds me",
  "I leave them intangible",
  "up in the cloud around my head"
];

let poem6 = [
  "we will meet again in San Junipero"
];

let poem7 = [
  "if I sum all the time spend with the significant other",
  "and the time through the significant device",
  "I’m not sure who I touched more",
  "( i always had long distance relationships)"
];

let poem8 = [
  "the emoji of our conversation on messenger",
  "was the simple smiling face upside down",
  " ",
  "uneasy peasy"
];

let poem9 = [
  "as a teenager I felt agency",
  "choosing from the circulating images",
  "the ones that made me relate",
  "the ones I wanted to dive in",
  "like a part of me really inhabited them for a while",
  " ",
  "from the infinite pool of coolness",
  "you could choose your own cool package",
  "and create your own collections of desires",
  " ",
  "we grew up curating images",
  " ",
  '-we share the knowledge of image-',
  "was the subtitle of my main tumblr"
];

let poem10 = [
  "of course I am wondering what would happen ",
  "if I trained an AI with all my personal data",
  "who doesn’t?"
];

let poems = [poem, poem2,poem3,poem4,poem5,poem6,poem7,poem8,poem9,poem10];

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
  let element10=loadImage("digidear/Paint Layer 11.PNG");
  let element11=loadImage("digidear/Paint Layer 10.PNG");
  let element12=loadImage("digidear/Paint Layer 11.PNG");
  // to change
  let element13=loadImage("tumblr/Paint Layer 10.PNG");
  // tumblr
  let element14=loadImage("tumblr/Paint Layer 2.PNG")
  let element15=loadImage("tumblr/Paint Layer 3.PNG")
  let element16=loadImage("tumblr/Paint Layer 4.PNG")
  let element17=loadImage("tumblr/Paint Layer 5.PNG")
  // to change
  let element18=loadImage("tumblr/Paint Layer 16.PNG")
  let element19=loadImage("tumblr/Paint Layer 8.PNG")
  let element20=loadImage("tumblr/Paint Layer 9.PNG")
  let element21=loadImage("tumblr/Paint Layer 10.PNG")
  let element22=loadImage("tumblr/Paint Layer 11.PNG")
  let element23=loadImage("tumblr/Paint Layer 13.PNG")
  let element24=loadImage("tumblr/Paint Layer 14.PNG")
  let element25=loadImage("tumblr/Paint Layer 15.PNG")
  let element26=loadImage("tumblr/Paint Layer 16.PNG")

  let element27=loadImage("digihistory-reorganizedlayers/Paint Layer 1.PNG")
  let element28=loadImage("digihistory-reorganizedlayers/Paint Layer 3 Merged.PNG")
  let element29=loadImage("digihistory-reorganizedlayers/Paint Layer 6.PNG")
  let element30=loadImage("digihistory-reorganizedlayers/Paint Layer 7.PNG")
  let element31=loadImage("digihistory-reorganizedlayers/Paint Layer 10.PNG")
  let element32=loadImage("digihistory-reorganizedlayers/Paint Layer 11 Merged.PNG")
  let element33=loadImage("digihistory-reorganizedlayers/Paint Layer 13.PNG")
  let element34=loadImage("digihistory-reorganizedlayers/Paint Layer 17 Merged.PNG")
  let element35=loadImage("digihistory-reorganizedlayers/Paint Layer 18 Merged.PNG")
  let element36=loadImage("digihistory-reorganizedlayers/Paint Layer 19 Merged.PNG")
  let element37=loadImage("digihistory-reorganizedlayers/Untitled23.png Merged.PNG")
  let element38=loadImage("digihistory-reorganizedlayers/Paint Layer 22 Merged.PNG")
  let element39=loadImage("digihistory-reorganizedlayers/Paint Layer 26.PNG")
  let element40=loadImage("digihistory-reorganizedlayers/Paint Layer 38.PNG")
  let element41=loadImage("digihistory-reorganizedlayers/Paint Layer 39.PNG")
  let element42=loadImage("digihistory-reorganizedlayers/Paint Layer 41.PNG")
  let element43=loadImage("digihistory-reorganizedlayers/Paint Layer 42.PNG")
  let element44=loadImage("digihistory-reorganizedlayers/Paint Layer 45.PNG")
  let element45=loadImage("digihistory-reorganizedlayers/Paint Layer 46.PNG")
  let element46=loadImage("digihistory-reorganizedlayers/Paint Layer 47.PNG")
  let element47=loadImage("digihistory-reorganizedlayers/Paint Layer 48.PNG")
  let element48=loadImage("digihistory-reorganizedlayers/Paint Layer 52.PNG")
  let element49=loadImage("digihistory-reorganizedlayers/Paint Layer 55.PNG")
  let element50=loadImage("digihistory-reorganizedlayers/Untitled.png Merged.PNG")
  let element51=loadImage("digihistory-reorganizedlayers/Paint Layer 57.PNG")
  let element52=loadImage("digihistory-reorganizedlayers/Untitled5.png Merged.PNG")
  let element53=loadImage("digihistory-reorganizedlayers/Paint Layer 58.PNG")
  let element54=loadImage("digihistory-reorganizedlayers/Paint Layer 59.PNG")









  elements=[
    element0,element1,element2,element3,element4,element5,
    element6,element7,element8,element9,element10,element11,
    element12,element13,element14,element15,element16,element17,
    element18,element19,element20,element21,element22,element23,
    element24,element25,element26,element27,element28,element29,
    element30,element31,element32,element33,element34,element35,
    element36,element37,element38,element39,element40,element41,
    element42,element43,element44,element45,element46,element47,
    element48,element49,element50,element51,element52,element53,
    element54];

  let scene0=loadImage("desk.jpg");
  let scene1=loadImage("digideer.jpg");
  let scene2=loadImage("tumblr.jpg");
  let scene3=loadImage("digihistory.jpg");
  let scene4=loadImage("messenger.jpg");
  let scene5=loadImage("space.jpg");



  scenes=[scene0,scene1,scene2,scene3,scene4,scene5]

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
  poemOnDisplay = poems[poemIndex];


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
    console.log('problem',elementIndex)
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
  // random
  // let newPoem = Math.floor(Math.random()*3);

  poemIndex++;
  if(poemIndex>=poems.length){
    poemIndex=0;
  }
  poemOnDisplay = poems[poemIndex];
}


function addelementture(){
  elementIndex++;
  if (elementIndex>=elements.length){
    elementIndex=0;
  }
}


function restart(){
  // clear()
  
let imageAspect = scenes[sceneIndex].width / scenes[sceneIndex].height;
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

  
  // console.log('restarted',scenes[sceneIndex])

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  windowAspect = width / height;

}
