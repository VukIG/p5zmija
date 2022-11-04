const size = 500
let kurac;
let points = 0;
const tileSize = 50;
let guja = [];
let xv,yv;
let BRZ=50;


function kraj(){
    let endScreen=document.createElement('div');
    endScreen.innerHTML=
    `
    <div class="imas">
        <h1> Izgubio si picko </h1>
        <p>Your score was ${points}</p>
    </div>
    
    `;
   document.appendChild(endScreen);     
    
}


function createApple() {
    kurac=new p5.Vector(random(0,size/tileSize-1),random(0,size/tileSize)-1);
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
        xv=-1;
    } else if (keyCode === RIGHT_ARROW) {
        xv=1;
    }
    else if (keyCode === DOWN_ARROW) {
        yv=-1;
    }
    else if (keyCode === UP_ARROW) {
        yv=1;
    }
}

function proveri() {
    let newx=guja[0].x+xv;
    let newy=guja[0].y+yv;
    guja.forEach(deoGuje => {
        if(newx==deoGuje.x && newy==deoGuje.y){
            return 0;
        }
    });
    return 1;
}

function snake() {
    
    let istina=proveri();
    if (istina==1){
        guja[0].set(guja[0].x*xv,guja[0].y*yv);
        guja[0].x*xv*BRZ;
        guja[0].y*yv*BRZ;
        console.log(guja[0])
    }
    else{
        return;
    }
    if (guja[0].x == kurac.x && guja[0].y == kurac.y) {
        createApple();
        points++;
        guja.push(new p5.Vector(guja[length-1].x,guja[length-1].y))
    }
    if (guja[0].x > height || guja[0].y > width || guja[0].x < 0 || guja[0].y < 0) {
        kraj();
        
    }
    for (let i = 1; i < guja.length - 1; i++) {
        if (guja[0].equals(guja[i])) kraj();
        guja[i].x = guja[i + 1].x;
        guja[i].y = guja[i + 1].y;
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
    guja.push(new p5.Vector(0, 0));
    ellipseMode(CORNER);
    createApple();
}


function draw() {
    snake();
    crtaj();
}
