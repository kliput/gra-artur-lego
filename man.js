const lastTimes = {
    top: 0,
    right: 0,
    down: 0,
    left: 0,
}

const movement = {};

function main() {
    const manPerson1 = document.querySelector('#man-person-container-1 .man-person');
    const manPerson2 = document.querySelector('#man-person-container-2 .man-person');

    const movePx = 5;
    
    const moveInterval = 50;

    function moveMan(manPerson, { x = 0, y = 0 }) {
        manPerson.style.left = `${parseInt(manPerson.style.left || 0) + x}px`;
        manPerson.style.top = `${parseInt(manPerson.style.top || 0) + y}px`;
    }
    
    const implementation = {
        up: { y: -movePx },
        right: { x: movePx },
        down: { y: movePx },
        left: { x: -movePx },
    };

    function move(manPerson, key) {
        moveMan(manPerson, implementation[key]);
    }

    function moveStart(manPerson, key) {
        movement[manPerson + key] = setInterval(() => move(manPerson, key), moveInterval);
    }

    function moveEnd(manPerson, key) {
        clearInterval(movement[manPerson + key]);
    }

    [['man-buttons-1', manPerson1], ['man-buttons-2', manPerson2]].forEach(([id, manPerson]) => {
        for (const key in implementation) {
            const button = document.querySelector(`#${id} .man-button-${key}`);
            button.addEventListener('mousedown', () => {
                moveStart(manPerson, key);
            });
            button.addEventListener('touchstart', () => {
                moveStart(manPerson, key);
            });
            button.addEventListener('mouseup', () => {
                moveEnd(manPerson, key);
            });
            button.addEventListener('touchend', () => {
                moveEnd(manPerson, key);
            });
            button.addEventListener('contextmenu', (event) => {
                event.preventDefault();
            });
        }
    });
}
