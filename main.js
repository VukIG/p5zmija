const size = 500
let kurac;
let points = 0;
const tileSize = 50;
let guja = [];
let v;
let BRZ=50;
//reakt document.quertselector akgpeqgo

function kraj(){
    let endScreen=document.createElement('div');
    endScreen.innerHTML=
    `
    <div class="imas">
        <h1> Izgubio si picko </h1>
        <p>Your score was ${points}</p>
    </div>
    
    `;
   react.appendChild(endScreen);     
    
}


function createApple() {
    kurac=new p5.Vector(floor(random(0,size/tileSize-1)),floor(random(0,size/tileSize)-1));
    guja.forEach(deoGuje => {
        if(deoGuje.equals(kurac)){
            createApple();
            return;
        }
                
    });
    
    return;
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        v.x=-1;
        v.y=0;
    } else if (keyCode === RIGHT_ARROW) {
        v.x=1;
        v.y=0;
    }
    else if (keyCode === DOWN_ARROW) {
        v.y=1;
        v.x=0;
    }
    else if (keyCode === UP_ARROW) {
        v.y=-1;
        v.x=0;
    }
}

function proveri() {
    let newx=guja[0].x+v.x;
    let newy=guja[0].y+v.y;
    guja.forEach(deoGuje => {
        if(newx==deoGuje.x && newy==deoGuje.y){
            return 0;
        }
    });
    return 1;
}

function snake() {
    if (guja[0].x*tileSize> width || guja[0].y*tileSize > height || guja[0].x < 0 || guja[0].y < 0) {
        kraj();
    }
    if (guja[0].equals(kurac)) {
        createApple();
        points++;
        guja.push(new p5.Vector(guja.at(-1).x,guja.at(-1).y))
        for (let i = 1; i < guja.length-1; i++) {
            if (guja[0].equals(guja[i])) kraj();
            guja[i].set(guja[i-1]);
        }
        
    }
    else{
    for (let i = 1; i < guja.length ; i++) {
        if (guja[0].equals(guja[i])) kraj();
        guja[i].set(guja[i-1]);
    }
}
    if (proveri()==1){
        guja[0].add(v);
    }
    else{
        return;
    }
    
}

function crtaj(){
    frameRate(2);
    background(20);
    fill('red');
    ellipse(kurac.x*tileSize,kurac.y*tileSize,tileSize);
    fill(250);
    guja.forEach(deoGuje => {
        rect(deoGuje.x*tileSize,deoGuje.y*tileSize,tileSize,tileSize);
    });
}

function setup() {
    createCanvas(size, size);
    guja = [];
    guja.push(new p5.Vector(4, 4));
    guja.push(new p5.Vector(3, 4));
    guja.push(new p5.Vector(2 , 4));
    guja.push(new p5.Vector(1 , 4));
    ellipseMode(CORNER);
    createApple();
    noStroke();
    v=new p5.Vector(0,-1);
}


function draw() {
    snake();
    crtaj();
}
