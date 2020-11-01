import { BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";

/**
 *  Update Ball's sppend and location
 * @param coordinates {x, y}
 * @param speed {x, y}
 * @returns { coordinates: new coordinates, speed: new speed }
 */
export const updateBall = ({x: ballX, y: ballY}, {x: xSpeed, y: ySpeed}) => {
    let newX, newY, newXSpeed, newYSpeed

    newX = ballX + xSpeed
    newY = ballY + ySpeed

    if (newX >= (CANVAS_WIDTH - BALL_RADIUS) || newX <= (BALL_RADIUS)) {
        newXSpeed = xSpeed * -1
    }
    if (newY >= (CANVAS_HEIGHT - BALL_RADIUS) || newY <= (BALL_RADIUS)) {
        newYSpeed = ySpeed * -1
    }
    return {
        coordinates: {
            x: newX,
            y: newY
        },
        speed: {
            x: newXSpeed || xSpeed,
            y: newYSpeed || ySpeed
        }
    }
}

