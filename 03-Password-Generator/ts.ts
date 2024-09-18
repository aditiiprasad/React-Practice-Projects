const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Game settings
const tileSize = 20;
const canvasSize = 400;
const snakeColor = 'green';
const foodColor = 'red';

let snake: { x: number, y: number }[] = [{ x: 200, y: 200 }];
let direction: { x: number, y: number } = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;

// Generate random position for food
function spawnFood() {
    const maxTiles = canvasSize / tileSize;
    food.x = Math.floor(Math.random() * maxTiles) * tileSize;
    food.y = Math.floor(Math.random() * maxTiles) * tileSize;
}

// Draw snake on canvas
function drawSnake() {
    ctx.fillStyle = snakeColor;
    snake.forEach(part => ctx.fillRect(part.x, part.y, tileSize, tileSize));
}

// Draw food on canvas
function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, tileSize, tileSize);
}

// Check if the snake collides with walls or itself
function checkCollision() {
    const head = snake[0];
    
    // Check wall collision
    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
        return true;
    }
    
    // Check self-collision
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    
    return false;
}

// Update snake position and handle game logic
function update() {
    // Create new head for the snake
    const head = { x: snake[0].x + direction.x * tileSize, y: snake[0].y + direction.y * tileSize };
    
    snake.unshift(head);

    // Check if snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        spawnFood();
    } else {
        snake.pop();
    }

    if (checkCollision()) {
        alert(`Game Over! Your score: ${score}`);
        snake = [{ x: 200, y: 200 }];
        direction = { x: 0, y: 0 };
        score = 0;
        spawnFood();
    }
}

// Clear the canvas for redrawing
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Main game loop
function gameLoop() {
    clearCanvas();
    drawFood();
    drawSnake();
    update();
}

// Handle key press events to control snake
function handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
}

window.addEventListener('keydown', handleKeyPress);

// Start the game
spawnFood();
setInterval(gameLoop, 100);
