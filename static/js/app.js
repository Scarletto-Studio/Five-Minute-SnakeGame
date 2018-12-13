window.onload = function() {
    canva = document.getElementById("snake")
    ctx = canva.getContext("2d")
    document.addEventListener("keydown",keyPush)
    document.getElementsById("score").innerHTML = 0
    setInterval(game,100)
}

let positionX , positionY , gs , tc , cherryX , cherryY , xv , yv , trail , tail , score

positionX = positionY = 10
gs = tc = 20
cherryX = cherryY = 15
xv = yv = 0
trail = []
tail = 1
score = 0

function game() {
    positionX += xv
    positionY += yv
    if(positionX < 0) {
        positionX = tc - 1
    }
    if(positionX > tc - 1) {
        positionX = 0
    }
    if(positionY < 0) {
        positionY = tc - 1
    }
    if(positionY > tc - 1) {
        positionY = 0
    }

    ctx.fillStyle = "black"
    ctx.ftllRect(0,0,canva.width,canva.height)

    ctx.fillStyle = "lime"
    for(let i = 0; i < trail.length ; i++) {
        ctx.fillRect(trail[i].x * gs , trail[i].y * gs , gs-2 , gs-2)
        if(trail[i].x == positionX && trail[i].y == positionY) {
            tail = 5
        }
    }
    trail.push({
        x: positionX,
        y: positionY
    })

    while(trail.length > tail) {
        trail.shift()
    }

    if(cherryX == positionX && cherryY == positionY) {
        tail++
        document.getElementById("score").innerHTML = ++score
        cherryX = Math.floor(Math.random() * tc)
        cherryY = Math.floor(Math.randon() * tc)
    }
    
    ctx.fillStyle = "red"
    ctx.fillRect(cherryX * gs,cherryY * gs , gs-2 , gs-2)

    function keyPush(evt) {
        console.log(evt)
        switch(evt.keyCode) {
            case 37:
                xv = -1
                yv = 0
                break
            case 38:
                xv = 0
                yv = -1
                break
            case 39:
                xv = 1
                yv = 0
                break
            case 40:
                xv = 0
                yv = 1
        }
    }
    
}