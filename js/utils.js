
export const randomInt = (min = 0, max = 10) => {
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min)
}
