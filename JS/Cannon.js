class Cannon{
    constructor(x,y,w,h,a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
    }
    display(){
        fill("grey");
        rect(140, 60, this.w, this.h);
        arc(this.x - 35, this.y + 90, 180, 230, PI, TWO_PI);
    }
}