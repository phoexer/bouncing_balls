import { updateBall } from './ball.js'
import { BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH, FRAMES_PER_SECOND } from "./constants.js";
import { randomInt } from "./utils.js";
import { drawCircle, redrawBackground } from './shapes.js'


window.onload = () => {
    const canvas = document.getElementById('gameCanvas')
    const canvasContext = canvas.getContext('2d')
    const colors = ['blue','white','yellow','red','purple']
    let coordinates = {
        x: randomInt(BALL_RADIUS, CANVAS_WIDTH - BALL_RADIUS),
        y: randomInt(BALL_RADIUS, CANVAS_HEIGHT - BALL_RADIUS)
    }
    let speed = {x: 1, y: 2}

    setInterval(() => {
        const {
            coordinates: newCoordinates,
            speed: newSpeed
        } = updateBall(coordinates, speed)

        coordinates = {...newCoordinates}
        speed = {...newSpeed}

        redrawBackground(canvasContext)
        drawCircle(canvasContext, coordinates, colors[randomInt(0, colors.length)])
    }, 1000 / FRAMES_PER_SECOND)
}
