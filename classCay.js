class Tree {
    _x;
    _y;
    _width;
    _height;
    _src;
    _hp;
    _xp;
    _growingTree;
    _die;


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

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    get hp() {
        return this._hp;
    }

    set hp(value) {
        this._hp = value;
    }

    get xp() {
        return this._xp;
    }

    set xp(value) {
        this._xp = value;
    }

    get growingTree() {
        return this._growingTree;
    }

    set growingTree(value) {
        this._growingTree = value;
    }

    get die() {
        return this._die;
    }

    set die(value) {
        this._die = value;
    }

    constructor(x, y, width, height, src, hp, xp, growingTree, die) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._src = src;
        this._hp = hp;
        this._xp = xp;
        this._growingTree = growingTree;
        this._die = die;
    }

    drawTree(ctx) {
        let image = new Image();
        image.src = this._src;
        ctx.beginPath();
        //image.onload = () => {
        ctx.drawImage(image, this._x, this._y, this._width, this._height,)
        //}
    }
}