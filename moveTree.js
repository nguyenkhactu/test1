let tree = new Tree(700, 500, 100, 100, 'imgTree/newtree.png')
tree.drawTree(ctx);


function clearCanvas() {
    ctx.clearRect(0, 0, 1500, 700);
}

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