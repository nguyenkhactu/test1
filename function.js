let imgList = [, 'imgWind/wind1.png', 'imgWind/wind2.png', 'imgWind/wind3.png', 'imgWind/wind4.png'];
let myWind1 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind2 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind3 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind4 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind5 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind6 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind7 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let myWind8 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png", Math.random() * 30);
let arrayWind = [myWind1, myWind2, myWind3, myWind4, myWind5, myWind6, myWind7, myWind8];

function showHp(j) {

    if (arrayWind[j].x > tree.x && arrayWind[j].x < tree.x + tree.width) {
        if (arrayWind[j].y > tree.y && arrayWind[j].y < tree.y + tree.height) {
            tree.xp += 1;
            if (arrayWind[j].x > tree.x + tree.width * 5 / 6 && tree.src === 'imgTree/treeright.png') {
                tree.hp -= 10;
            }
            if (arrayWind[j].x > tree.x && arrayWind[j].x < tree.x + tree.width / 6 && tree.src === 'imgTree/treeleft.png') {
                tree.hp -= 10;
            }
        }
    }
    if (tree.xp !== 0) {
        if (tree.xp % 100 === 0) {
            tree.growingTree += 1;

        }
    }
    if (tree.hp <= 0) {
        alert("Bạn đã tạch - ấn F5 hoặc Ctrl R - để chơi lại ")
        clearInterval(setInterval1)

    }
}

// if (hpTree.hp<= 0){   chưa sử lý
// clearInterval(setInterval1);
// tree.src= 'imgTree/tree.jpg';
// }

function clearCanvas() {
    ctx.clearRect(0, 0, 1500, 700);
}

function drawIimage(j) {
    for (let i = 0; i < imgList.length; i++) {
        let temp = imgList[2];
        imgList.shift();
        imgList.push(temp)
        arrayWind[j]._src = imgList[0];
    }
}

function collision(j) {//va chạm
    if (arrayWind[j].y > canvas.clientHeight || arrayWind[j].x > canvas.clientWidth) {
        arrayWind[j].x = Math.random() * canvas.clientWidth;
        arrayWind[j].y = Math.random() * canvas.clientHeight / 5;
    }
    if (arrayWind[j].x < canvas.clientWidth / 2 && arrayWind[j].x > 0) {
        return (arrayWind[j].moveDownright());
    }
    if (arrayWind[j].x > canvas.clientWidth / 2 && arrayWind[j].x < canvas.clientWidth) {
        return (arrayWind[j].moveDownleft());
    }
}


let tree = new Tree(canvas.clientWidth/2 - 43, 500, 100, 100, 'imgTree/newtree.png', 100, 0, 0, 'imgTree/tree.jpg')
tree.drawTree(ctx);


function moveTree(move) {
    switch (event.keyCode) {
        case 37: {
            clearCanvas();//left
            tree._src = 'imgTree/treeleft.png'
            tree.drawTree(ctx)
            break
        }
        case 39: {//right
            clearCanvas();
            tree._src = 'imgTree/treeright.png';
            tree.drawTree(ctx)
            break;
        }
        case 40: {
            clearCanvas();

            break;
        }
        case 38: {
            clearCanvas();

            break;
        }
    }
}

function drawText() {
    ctx.font = "20px red";
    ctx.fillText("Sức Sống :" + tree.hp, 0, 20);
    ctx.fillText("XP :" + tree.xp, 0, 50)
    ctx.fillText("growingTree :" + tree.growingTree, 0, 80)
    ctx.font = "30px red";

}

function canvasUpdat() {
    for (let j = 0; j < arrayWind.length; j++) {
        collision(j)//xét đk va chạm

        drawIimage(j)//gán lại địa chỉ ảnh
        clearCanvas()
        showHp(j)
        arrayWind[j].drawWind1(ctx)
        drawText()
        tree.drawTree(ctx)

    }
}

document.addEventListener('keydown', moveTree);
let setInterval1 = setInterval(canvasUpdat, 100)
