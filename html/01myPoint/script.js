const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let balls = [];


function Update(){
    requestAnimationFrame(Update)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let a = new Point(new Vector2d(getRandom(ctx.canvas.width), getRandom(ctx.canvas.height)), 10, getRandom(255), getRandom(255), getRandom(255), 0.5);
    balls.push(a);


    for(let i = 0; i<balls.length;i++){
        balls[i].radius += 0.5;
        balls[i].draw(ctx)
        
        if(balls[i].radius > 80){
            balls.splice(i, 1);
        }
    }
}

function getRandom(max){
    return Math.floor(Math.random() * max);
}

Update();