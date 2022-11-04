let stubg = [],
  stubd = [],
  stani = 0;
let V = 0,
  i = 0;
let ACC = 1,
  BRZ = 4;
let ptica = null;

//let brzina=document.querySelector('#semen');
//let potvrdi=document.querySelector('#opa');
//brzina.addEventListener("click",()=>{
  //BRZ=brzina.value;
  
//});


let boje = ["#344e41", "#3a5a40", "#588157", "#a3b18a"];
let boje0 = ["#001524", "#15616d", "#ffecd1", "#ff7d00"];
let boje2 = ["#003049", "#d62828", "#f77f00", "#eae2b7"];
let boje3 = ["#f72585", "#7209b7", "#3a0ca3", "#4cc9f0"];

boje = boje0;

class Pozicija {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  dodiruje(other) {
    if (
      this.x < other.x + other.w &&
      other.x < this.x + this.w  &&
      this.y < other.y + other.h &&
      other.y < this.y + this.h 
    )
      return 1;
    return 0;
  }
  prosao(other) {
    if (this.x < other.x + 2 && other.x - 2 < this.x) return 1;
    return 0;
  }
}

function setup() {
  i = 0;
  SKOR = 0;
  stani = 0;
  createCanvas(windowWidth,windowHeight);
  //print(windowHeight)
  noStroke();
  ptica = new Pozicija(width / 4, height / 2, height / 15, height / 15);
  rectMode(CORNER);
  ellipseMode(CORNER)
  stubg = [];
  stubd = [];
  dodajStub();
  ACC=BRZ/4;
  textSize(height/10)
}


let SKOR = 0;

function draw() {
  razmisljaj();
}

function mousePressed() {
  if (ptica.y > height - height / 10 || ptica.y < 0 || stani) setup();
  V = -15;
}
function keyPressed() {
  if (ptica.y > height - height / 10 || ptica.y < 0 || stani) setup();
  V = -15;
}
function dodajStub() {
  let r = random(height / 4, height - height / 10);
  stubg.push(new Pozicija(width, 0 - r, width / 10, (9 * height) / 10));
  stubd.push(
    new Pozicija(width, height - r + ptica.w * 2 + 15, width / 10, height)
  );
}
function razmisljaj() {
  if (windowWidth != width || windowHeight != height) {
    createCanvas(windowWidth, windowHeight);
    setup();
  }

  i++;
  if (ptica.y > (9 * height) / 10 || ptica.y < 0 || stani);
  else {
    ptica.y += V;
    V += ACC;

    if (i % (BRZ *20) == 0) {
      dodajStub();
    }

    crtaj();
  }
}

function crtaj() {
  background(boje[0]);
  fill(boje[2]);
  rect(0, height - height / 10, width, height / 10);
  fill(boje[1]);
  circle(ptica.x, ptica.y, ptica.w);

  fill(boje[3]);
  for (let j = 0; j < stubg.length; j++) {
    rect(stubg[j].x, stubg[j].y, stubg[j].w, stubg[j].h, 20);
    stubg[j].x -= BRZ;
    if (ptica.dodiruje(stubg[j])) stani = 1;
    if (ptica.prosao(stubg[j])) SKOR++;
    ///////////////////////
    rect(stubd[j].x, stubd[j].y, stubd[j].w, stubd[j].h, 20);
    stubd[j].x -= BRZ;
    if (ptica.dodiruje(stubd[j])) stani = 1;
  }
  fill(boje[2]);
  text(SKOR,width/2, height/10)
}
