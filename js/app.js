import { updateBall } from './ball.js'
import { BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH, FRAMES_PER_SECOND } from './constants.js'
import { randomInt, randomColor } from './utils.js'
import { drawCircle, redrawBackground } from './shapes.js'

window.onload = () => {
  const canvas = document.getElementById('gameCanvas')
  const canvasContext = canvas.getContext('2d')

  let balls = []
  for (let i = 0; i < 100; i++) {
    const ball = {
      coordinates: {
        x: randomInt(BALL_RADIUS, CANVAS_WIDTH - BALL_RADIUS),
        y: randomInt(BALL_RADIUS, CANVAS_HEIGHT - BALL_RADIUS)
      },
      speed: {
        x: randomInt(-5, 5),
        y: randomInt(-5, 5)
      },
      color: randomColor()
    }
    balls.push(ball)
  }

  setInterval(() => {
    redrawBackground(canvasContext)
    balls = balls.map((ball) => {
      const { coordinates, speed } = updateBall(ball.coordinates, ball.speed)
      const changeColor = speed.x !== ball.speed.x || speed.y !== ball.speed.y
      const color = changeColor ? randomColor() : ball.color

      drawCircle(canvasContext, coordinates, undefined, ball.color)
      return { coordinates, speed, color }
    })
  }, 1000 / FRAMES_PER_SECOND)
}
