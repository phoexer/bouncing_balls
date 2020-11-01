import { updateBall } from './ball.js'
import { BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH, FRAMES_PER_SECOND } from "./constants.js";
import { randomInt, randomColor } from "./utils.js";
import { drawCircle, redrawBackground } from './shapes.js'


window.onload = () => {
    const canvas = document.getElementById('gameCanvas')
    const canvasContext = canvas.getContext('2d')
    let color = 'white'

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

        if (newSpeed.x !== speed.x || newSpeed.y !== speed.y) {
            color = randomColor()
        }

        redrawBackground(canvasContext)
        coordinates = {...newCoordinates}

        speed = {...newSpeed}
        drawCircle(canvasContext, coordinates, undefined,color)
    }, 1000 / FRAMES_PER_SECOND)
}
