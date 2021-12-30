function resizeCanvas() {
    let canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d');
    context.beginPath()
    let treeImage = new Tree()

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        treeImage.src="imgTree/newtree.png";
        treeImage.onload = function (){
            context.drawImag(treeImage,200,700,10,20);
        }
    }
}