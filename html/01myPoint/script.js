const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let ball = [];

for(let i=0; balls.length > i; i++){

}

function Update(){
    requestAnimationFrame(Update)
    let a = new Point(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 40);
    ball.push(a);
}

for(let i=0; i<ball.length; i++){
    ball
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}