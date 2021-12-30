let imgList = [, 'imgWind/wind1.png', 'imgWind/wind2.png', 'imgWind/wind3.png', 'imgWind/wind4.png'];
let myWind1 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind2 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind3 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind4 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind5 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind6 = new Wind(Math.random() * canvas.clientWidth,Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind7 = new Wind(Math.random() * canvas.clientWidth,Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let myWind8 = new Wind(Math.random() * canvas.clientWidth, Math.random() * 200, 40, 40, "imgWind/wind1.png",Math.random()*30);
let arrayWind = [myWind1, myWind2, myWind3, myWind4,myWind5,myWind6,myWind7,myWind8];

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
        arrayWind[j].y = Math.random() * canvas.clientHeight/5;
    }
    if (arrayWind[j].x < canvas.clientWidth/2 && arrayWind[j].x>0){
        return(arrayWind[j].moveDownright());
    }
    if (arrayWind[j].x > canvas.clientWidth/2 && arrayWind[j].x < canvas.clientWidth){
        return (arrayWind[j].moveDownleft());
    }
}

function canvasUpdat() {
    for (let j = 0; j < arrayWind.length; j++) {

        collision(j)
        clearCanvas()
        drawIimage(j)
        arrayWind[j].drawWind1(ctx);
        tree.drawTree(ctx)
    }
}

let tree = new Tree(700, 500, 100, 100, 'imgTree/newtree.png')
tree.drawTree(ctx);


function moveTree(move) {
    switch (event.keyCode) {
        case 37: {
            clearCanvas();
            tree._src = 'imgTree/treeleft.png'
            tree.drawTree(ctx)
            break
        }
        case 39: {
            clearCanvas();
            tree._src = 'imgTree/treeright.png';
            tree.drawTree(ctx)
            break;
        }
        case 40: {
            clearCanvas();
            tree._src = 'imgTree/newtree.png'
            tree.drawTree(ctx)
            break;
        }
        case 38: {
            clearCanvas();
            tree._src = 'imgTree/newtree.png'
            tree.drawTree(ctx)
            break;
        }
    }
}

document.addEventListener('keydown', moveTree);
setInterval(canvasUpdat, 100)