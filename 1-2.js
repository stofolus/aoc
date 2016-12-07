"use strict";

const input = "L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2".split(', ');

//const input = "R8, R4, R4, R8".split(', ');

const positions = {x: 0, y: 0};
let direction = 0;
const visited = [];

for(let index in input) {
    let move = input[index];
    let steps = parseInt(move.slice(1), 10);

    switch (move[0]) {
        case 'R':
            direction += 1;
            break;
        case 'L':
            direction -= 1;
            break;
    }

    switch (direction % 4) {
        case 0:
            stepInIteration('y', steps);
            break;
        case 1:
        case -3:
            stepInIteration('x', steps);
            break;
        case 2:
        case -2:
            stepInIteration('y', -Math.abs(steps));
            break;
        case 3:
        case -1:
            stepInIteration('x', -Math.abs(steps));
            break;
    }
}

function stepInIteration(axis, steps) {
    const step = steps / Math.abs(steps);
    while(steps !== 0) {
        positions[axis] += step;
        track();
        steps -= step;
    }
}

function track() {
    const stringPosition = `${positions.y},${positions.x}`;
    if (visited.includes(stringPosition)){
        console.log(`The awnswer is ${positions.y + positions.x}`);
        process.exit(1);
    }
    visited.push(stringPosition);
}