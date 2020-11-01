import {BACKGROUND_COLOR, BALL_COLOR, BALL_RADIUS, CANVAS_HEIGHT, CANVAS_WIDTH} from "./constants.js";

export const drawRectangle = (canvasContext, {x, y}, width=CANVAS_WIDTH, height=CANVAS_HEIGHT, color=BACKGROUND_COLOR) => {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

export const drawCircle = (canvasContext, {x, y}, radius=BALL_RADIUS, color=BALL_COLOR) => {
    canvasContext.fillStyle = color
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true)
    canvasContext.fill()
}

export const redrawBackground = (canvasContext) =>{
    drawRectangle(canvasContext, {x: 0, y: 0}, CANVAS_WIDTH, CANVAS_HEIGHT, BACKGROUND_COLOR)
}
