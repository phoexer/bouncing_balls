
export const randomInt = (min = 0, max = 10) => {
    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min)
}

export const randomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
