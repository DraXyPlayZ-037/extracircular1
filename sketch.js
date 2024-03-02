var splashscreen
var gameState = "wait"
var infobutton, playbutton

// loading assets like images sound videos etc
function preload() {
    splashscreen = loadImage("splashscreen.gif")
}


// setting up the game like creating canvas, sprites, button etc
function setup() {
    createCanvas(windowWidth, windowHeight);

    playbutton = createImg("play.webp")
    playbutton.position(0, 150)
    playbutton.size(425, 160)


    infobutton = createImg("info.webp")
    infobutton.position(0, 275)
    infobutton.size(425, 160)

    playtxt = createImg("play.webp")
    playtxt.position(0, 150)
    playtxt.size(400, 155)


    infotxt = createImg("info.webp")
    infotxt.position(0, 275)
    infotxt.size(400, 155)

}


// this function runs on every frame till the codes are running
function draw() {

    if (gameState == "wait") {
        background(splashscreen)
    }


    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.hide()
        gameState = "level1"
    })



    if (gameState == "level1") {
        background("yellow")
    }

    drawSprites()

}