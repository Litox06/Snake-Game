let lastRenderTime = 0
const SNAKE_SPEED = 2;

function main(currentTime) { // Update snake's position
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    console.log('Render')
    lastRenderTime = currentTime
}

window.requestAnimationFrame(main)
