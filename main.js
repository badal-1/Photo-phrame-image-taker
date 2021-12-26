function preload() {}
function setup() {
canvas = createCanvas(600,600);
canvas.position(500, 100);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video, 160, 120, 300, 300);
fill('green');
rect(30, 0, 100,120);
fill('black');
circle(190, 60, 120);
fill('green')
rect(250,0 , 100,120);
fill('black')
circle(410, 60, 120);
fill('green')
rect(470,0 , 100,120);
fill('black');
circle(520, 180, 120);
fill('green');
rect(470, 240 , 100,120);
fill('black');
circle(520, 420, 120);
fill('green');
rect(360, 420 , 100,120);
fill('black');
circle(300, 480, 120);
fill('green');
rect(140, 420 , 100,120);
fill('black');
circle(80, 420, 120);
fill('green');
rect(30, 240 , 100,120);
fill('black');
circle(80, 180, 120);
}
function take_snapshot() {
save("user.png");  
}

