import { BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";

/**
 *  Update Ball's speed and location
 * @param coordinates {x, y}
 * @param speed {x, y}
 * @returns { coordinates: new coordinates, speed: new speed }
 */
export const updateBall = ({x: ballX, y: ballY}, {x: xSpeed, y: ySpeed}) => {
    const newX = ballX + xSpeed
    const newY = ballY + ySpeed

    const changeXDirection = newX >= (CANVAS_WIDTH - BALL_RADIUS) || newX <= (BALL_RADIUS)
    const changeYDirection = newY >= (CANVAS_HEIGHT - BALL_RADIUS) || newY <= (BALL_RADIUS)

    const newXSpeed = changeXDirection ? xSpeed * -1 : xSpeed
    const newYSpeed = changeYDirection ? ySpeed * -1 : ySpeed

    return {
        coordinates: {x: newX, y: newY},
        speed: {x: newXSpeed, y: newYSpeed}
    }
}

