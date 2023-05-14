
window.onload = playGame



function playGame() {
    this.canvas = document.getElementsByTagName("canvas").item(0)
    this.ctx = canvas.getContext("2d")

    this.clean = function() {
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    function Block(x,y) {
        this.row = x;
        this.column = y;

        this.draw = function() {
            //this.rgb = [0,0,0]
            //rgb.forEach(c => )
            ctx.fillStyle = "rgb("+Math.floor(Math.random() * 250)+", "+Math.floor(Math.random() * 150+50)+", 220)"
            ctx.fillRect(canvas.width/10*this.row, canvas.height/10*this.column, canvas.width/10, canvas.height/10)

        }
    }

    this.initBlocks = function() {
        this.blocks = []
        for(var i = 0; i < 10; i++) {
            x = Math.floor(Math.random() * 10)
            y = Math.floor(Math.random() * 10)
            blocks.push(new Block(x,y))
        }

    }

    this.drawField = function() {
        blocks.forEach(block => block.draw());
    }

    clean()
    initBlocks()
    drawField()




}
