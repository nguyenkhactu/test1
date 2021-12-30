class Obstacle{
    _x;
    _y;
    _radius;
    _speed;
    constructor(x,y,radius, speed) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._speed = speed;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    drawObstacle(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = 'gray';
        ctx.fill();
    }
    moveDown(){
        this.y += this._speed;
        this._speed *= 1.001;
    }
}
