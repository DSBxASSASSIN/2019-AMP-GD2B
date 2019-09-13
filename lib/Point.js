class Point {
    constructor(posision, radius, r, g, b, a){
        this.posision = posision;
        this.radius = radius || 10;
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 1;
    }

    get color(){
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a +  ")";
    }

    get colorStroke(){
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a * 2 +  ")";
    }

    draw(ctx){
        
        ctx.beginPath();
        ctx.strokeStyle = this.colorStroke;
        ctx.fillStyle = this.color;
        ctx.arc(this.posision.dx, this.posision.dy, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}