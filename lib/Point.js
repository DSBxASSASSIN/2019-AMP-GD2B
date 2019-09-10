class Point {
    constructor(posision, radius, r, g, b){
        this.posision = posision;
        this.radius = radius || 10;
        this.r = r || 255;
        this.g = g || 255;
        this.b = b || 255;
    }

    get color(){
        return "rgba(" + this.r + "," + this.g + "," + this.b + ")";
    }

    draw(ctx){
        
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.posision.dx, this.posision.dy, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}