const lastTimes = {
    top: 0,
    right: 0,
    down: 0,
    left: 0,
}

const movement = {};

function main() {
    const manPerson = document.getElementById('man-person');

    const movePx = 5;
    
    const moveInterval = 50;

    function moveMan({ x = 0, y = 0 }) {
        manPerson.style.left = `${parseInt(manPerson.style.left || 0) + x}px`;
        manPerson.style.top = `${parseInt(manPerson.style.top || 0) + y}px`;
    }
    
    const implementation = {
        up: { y: -movePx },
        right: { x: movePx },
        down: { y: movePx },
        left: { x: -movePx },
    };

    function move(key) {
        moveMan(implementation[key]);
    }

    function moveStart(key) {
        movement[key] = setInterval(() => move(key), moveInterval);
    }

    function moveEnd(key) {
        clearInterval(movement[key]);
    }

    for (const key in implementation) {
        const button = document.getElementById(`man-button-${key}`);
        button.addEventListener('mousedown', () => {
            moveStart(key);
        });
        button.addEventListener('touchstart', () => {
            moveStart(key);
        });
        button.addEventListener('mouseup', () => {
            moveEnd(key);
        });
        button.addEventListener('touchend', () => {
            moveEnd(key);
        });
        button.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
    }
}
