/*

let easycam, globe;
let total = 50;

function setup() {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    const canvas = createCanvas(winWidth, winHeight, WEBGL);
    canvas.parent('canvas');

    easycam = createEasyCam();

    globe = createVector([total + 1], [total + 1]);
    frameRate(1);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
    background(0, 1);
    noStroke();

    fill(255);

    easycam.setDistanceMin(800);
    easycam.removeMouseListeners();


    rotateY(frameCount * 0.001);
    rotateX(frameCount * 0.0005);
    rotateZ(frameCount * 0.001);

    const radius = 500;

    for (let i = 0; i < total; i++) {
        let lon = map(i, 0, total, -PI, PI);
        // rotateY(frameCount * 0.00003);
        for (let j = 0; j < total; j++) {
            let lat = map(j, 0, total, -PI, PI * 8);
            let x = radius * sin(lat) * cos(lon);
            let y = radius * sin(lat) * sin(lon);
            let z = radius * cos(lat);

            push();
            translate(x,y,z);
            sphere(.5);
            pop();
        }
    }
}


*/

