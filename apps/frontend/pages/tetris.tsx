import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React from 'react';
import { Summary } from '../src/Resume/Summary';
import { createStyles } from '@mantine/core';

const Resume: NextPage = () => {
  const { classes } = useStyles();

  //   const isMobile = false;

  //   //Declaration

  //   const width = 10;
  //   const depth = 20;
  //   const displayWidth = 5;
  //   const displayDepth = 6;

  //   const grid = document.getElementsByClassName('grid')[0];
  //   for (let i = 0; i < width * (depth + 1); i++) {
  //     const element = document.createElement('div');
  //     if (i >= width * depth) {
  //       element.classList.add('ground');
  //       element.classList.add('taken');
  //     }
  //     grid.appendChild(element);
  //   }
  //   let squares = Array.from(document.querySelectorAll('.grid div'));

  //   const miniGrid = document.getElementsByClassName('mini-grid')[0];
  //   for (let i = 0; i < displayWidth * displayDepth; i++) {
  //     miniGrid.appendChild(document.createElement('div'));
  //   }
  //   const displaySquares = document.querySelectorAll('.mini-grid div');

  //   const music = document.getElementById('music');
  //   const musicBtn = document.querySelector('#music-button');

  //   const startBtn = document.querySelector('#start-button');
  //   const restartBtn = document.querySelector('#restart-button');
  //   const leftBtn = document.querySelector('#left-button');
  //   const upBtn = document.querySelector('#up-button');
  //   const rightBtn = document.querySelector('#right-button');
  //   const downBtn = document.querySelector('#down-button');

  //   const modeGravity = document.querySelector('#gravity-check'); //
  //   const modeFour = document.querySelector('#four-check'); //
  //   const modeMono = document.querySelector('#mono-check'); //
  //   const modeRoblox = document.querySelector('#roblox-check'); //
  //   const modeHomeo = document.querySelector('#homeo-check'); // TODO
  //   const modeClearance = document.querySelector('#clearance-check'); //
  //   const modeEyes = document.querySelector('#eyes-check'); //
  //   const modeOpposite = document.querySelector('#opposite-check'); //
  //   const modeGround = document.querySelector('#ground-check'); //
  //   const modeProductive = document.querySelector('#productive-check'); //
  //   const modeLava = document.querySelector('#lava-check'); //
  //   const modeHard = document.querySelector('#hard-check'); //
  //   const modeInteraction = document.querySelector('#interaction-check'); //

  //   const scoreDisplay = document.querySelector('#score');
  //   const levelDisplay = document.querySelector('#level');
  //   const rowDisplay = document.querySelector('#row');

  //   const greenColor = '#1fa812';
  //   const redColor = '#b40a0a';
  //   const greenLight = '#30c023';
  //   const redLight = '#cc1f1f';
  //   let blinkState = false;
  //   const timeBlink = 500;
  //   let timerColor: string | number | NodeJS.Timeout | undefined;

  //   let score = 0;
  //   let rowCount = 0;
  //   let level = 0;
  //   let state = 'prestart';
  //   let musicState = false;

  //   let timerId: string | number | NodeJS.Timeout | undefined;
  //   const speedDial = 6;
  //   const speedTable = [80, 65, 50, 40, 32, 25, 20, 17, 15, 13];
  //   let timeStep = speedDial * speedTable[Math.min(level, speedTable.length - 1)];
  //   let drop = 1;
  //   let filledRows: unknown[] = [];
  //   let toClear: unknown[][] = [];
  //   let bonus = 0;
  //   const bonusTable = [0, 100, 400, 900, 2500];
  //   const levelTable = [10, 30, 50, 70, 100, 150, 200, 250, 300];

  //   let timerToutch: string | number | NodeJS.Timeout | undefined;
  //   const timeToogle = 500;
  //   const timeReInput = 40;

  //   const startPosition = 3;
  //   let currentPosition = startPosition;
  //   let currentRotation = 0;
  //   const displayIndex = displayWidth * 2 + 1;

  //   //Tetrominoes

  //   const iTetromino = {
  //     rotations: [
  //       [width, width + 1, width + 2, width + 3],
  //       [2, width + 2, width * 2 + 2, width * 3 + 2],
  //       [width * 2, width * 2 + 1, width * 2 + 2, width * 2 + 3],
  //       [1, width + 1, width * 2 + 1, width * 3 + 1],
  //     ],
  //     color: '#68cdff',
  //     display: [-displayWidth + 1, 1, displayWidth + 1, displayWidth * 2 + 1],
  //   };

  //   const oTetromino = {
  //     rotations: [
  //       [1, 2, width + 1, width + 2],
  //       [1, 2, width + 1, width + 2],
  //       [1, 2, width + 1, width + 2],
  //       [1, 2, width + 1, width + 2],
  //     ],
  //     color: '#ffff09',
  //     display: [0, 1, displayWidth, displayWidth + 1],
  //   };

  //   const tTetromino = {
  //     rotations: [
  //       [2, width + 1, width + 2, width + 3],
  //       [2, width + 2, width + 3, width * 2 + 2],
  //       [width + 1, width + 2, width + 3, width * 2 + 2],
  //       [2, width + 1, width + 2, width * 2 + 2],
  //     ],
  //     color: '#cd04ff',
  //     display: [1, displayWidth, displayWidth + 1, displayWidth + 2],
  //   };

  //   const jTetromino = {
  //     rotations: [
  //       [1, width + 1, width + 2, width + 3],
  //       [2, 3, width + 2, width * 2 + 2],
  //       [width + 1, width + 2, width + 3, width * 2 + 3],
  //       [2, width + 2, width * 2 + 1, width * 2 + 2],
  //     ],
  //     color: '#6173ff',
  //     display: [0, displayWidth, displayWidth + 1, displayWidth + 2],
  //   };

  //   const lTetromino = {
  //     rotations: [
  //       [3, width + 1, width + 2, width + 3],
  //       [2, width + 2, width * 2 + 2, width * 2 + 3],
  //       [width + 1, width + 2, width + 3, width * 2 + 1],
  //       [1, 2, width + 2, width * 2 + 2],
  //     ],
  //     color: '#ff6702',
  //     display: [2, displayWidth, displayWidth + 1, displayWidth + 2],
  //   };

  //   const sTetromino = {
  //     rotations: [
  //       [2, 3, width + 1, width + 2],
  //       [2, width + 2, width + 3, width * 2 + 3],
  //       [width + 2, width + 3, width * 2 + 1, width * 2 + 2],
  //       [1, width + 1, width + 2, width * 2 + 2],
  //     ],
  //     color: '#0eff0a',
  //     display: [1, 2, displayWidth, displayWidth + 1],
  //   };

  //   const zTetromino = {
  //     rotations: [
  //       [1, 2, width + 2, width + 3],
  //       [3, width + 2, width + 3, width * 2 + 2],
  //       [width + 1, width + 2, width * 2 + 2, width * 2 + 3],
  //       [2, width + 1, width + 2, width * 2 + 1],
  //     ],
  //     color: '#e23030',
  //     display: [0, 1, displayWidth + 1, displayWidth + 2],
  //   };

  //   const monomino = {
  //     rotations: [[2], [2], [2], [2]],
  //     color: '#903cf3',
  //     display: [displayWidth + 1],
  //   };

  //   const rowmino = {
  //     rotations: [
  //       Array.from(Array(width), (_, i) => i + width - startPosition),
  //       Array.from(Array(width), (_, i) => i + width - startPosition),
  //       Array.from(Array(width), (_, i) => i + width - startPosition),
  //       Array.from(Array(width), (_, i) => i + width - startPosition),
  //     ],
  //     color: '#ebddfc',
  //     display: Array.from(
  //       Array(displayDepth),
  //       (_, i) => displayWidth * i - displayIndex + 2
  //     ),
  //   };

  //   const nomino = {
  //     rotations: [[], [], [], []],
  //     color: '#000000',
  //     display: [],
  //   };

  //   const theTetrominoes = [
  //     iTetromino,
  //     oTetromino,
  //     tTetromino,
  //     jTetromino,
  //     lTetromino,
  //     sTetromino,
  //     zTetromino,
  //     monomino,
  //     rowmino,
  //     nomino,
  //   ];
  //   const indexMonomino = [7];
  //   const indexRowmino = [8];
  //   const indexNomino = [9];
  //   const indexTetrominoes = Array.from(Array(7), (_, i) => i);

  //   function newRandom() {
  //     let indexValid: unknown[] = [];
  //     if (modeFour?.checked == true) {
  //       indexValid = indexValid.concat(indexTetrominoes);
  //     }
  //     if (modeMono?.checked == true) {
  //       indexValid = indexValid.concat(indexMonomino);
  //     }
  //     if (modeRoblox?.checked == true) {
  //       indexValid = indexValid.concat(indexRowmino);
  //     }
  //     if (indexValid.length == 0) {
  //       indexValid = indexValid.concat(indexNomino);
  //     }
  //     return indexValid[Math.floor(Math.random() * indexValid.length)];
  //   }

  //   let nextRandom = newRandom();
  //   let random = newRandom();
  //   let current = theTetrominoes[random]['rotations'][currentRotation];

  //   //Display

  //   function draw() {
  //     current.forEach((index) => {
  //       squares[currentPosition + index].classList.add('tetromino');
  //       squares[currentPosition + index].style.backgroundColor = getColor(random);
  //     });
  //   }

  //   function undraw() {
  //     current.forEach((index) => {
  //       squares[currentPosition + index].classList.remove('tetromino');
  //       squares[currentPosition + index].style.backgroundColor = '';
  //     });
  //   }

  //   function displayShape() {
  //     displaySquares.forEach((square) => {
  //       square.classList.remove('tetromino');
  //       square.style.backgroundColor = '';
  //     });
  //     theTetrominoes[nextRandom]['display'].forEach((index) => {
  //       displaySquares[displayIndex + index].classList.add('tetromino');
  //       displaySquares[displayIndex + index].style.backgroundColor =
  //         getColor(nextRandom);
  //     });
  //   }

  //   function getColor(index: string | number) {
  //     if (modeEyes.checked == true) {
  //       return theTetrominoes[index]['color'];
  //     } else {
  //       return '';
  //     }
  //   }

  //   //Controles

  //   function control(e: { code: string }) {
  //     if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
  //       moveLeft();
  //     } else if (e.code == 'KeyW' || e.code == 'ArrowUp') {
  //       rotate();
  //     } else if (e.code == 'KeyD' || e.code == 'ArrowRight') {
  //       moveRight();
  //     } else if (e.code == 'KeyS' || e.code == 'ArrowDown') {
  //       droping();
  //     }
  //   }
  //   document.addEventListener('keydown', control);

  //   if (isMobile) {
  //     leftBtn.addEventListener('touchstart', () => {
  //       touch(moveLeft);
  //     });
  //     upBtn.addEventListener('touchstart', () => {
  //       touch(rotate);
  //     });
  //     rightBtn.addEventListener('touchstart', () => {
  //       touch(moveRight);
  //     });
  //     downBtn.addEventListener('touchstart', () => {
  //       touch(droping);
  //     });

  //     document.addEventListener('touchend', () => {
  //       clearInterval(timerToutch);
  //     });
  //   } else {
  //     leftBtn.addEventListener('mousedown', () => {
  //       touch(moveLeft);
  //     });
  //     upBtn.addEventListener('mousedown', () => {
  //       touch(rotate);
  //     });
  //     rightBtn.addEventListener('mousedown', () => {
  //       touch(moveRight);
  //     });
  //     downBtn.addEventListener('mousedown', () => {
  //       touch(droping);
  //     });

  //     document.addEventListener('mouseup', () => {
  //       clearInterval(timerToutch);
  //     });
  //   }

  //   function touch(inputFunction: {
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //     (): void;
  //   }) {
  //     inputFunction();
  //     clearInterval(timerToutch);
  //     timerToutch = setInterval(reTouch(inputFunction), timeToogle);
  //   }

  //   function reTouch(inputFunction: () => void) {
  //     return function () {
  //       inputFunction();
  //       clearInterval(timerToutch);
  //       timerToutch = setInterval(inputFunction, timeReInput);
  //     };
  //   }

  //   function droping() {
  //     if (state === 'play') {
  //       drop++;
  //       clearInterval(timerId);
  //       timerId = setInterval(gravity, timeStep);
  //       moveDown();
  //     }
  //   }

  //   function gravity() {
  //     if (random == indexNomino[0]) {
  //       random = nextRandom;
  //       current = theTetrominoes[random]['rotations'][currentRotation];
  //       nextRandom = newRandom();
  //       currentPosition = startPosition;
  //       draw();
  //       displayShape();
  //     }
  //     if (modeHard.checked == true) {
  //       let time = 0;
  //       while (state == 'play' && modeHard.checked == true && time < 1000) {
  //         time++;
  //         console.log(time);
  //         if (modeGravity.checked == true) {
  //           moveDown();
  //         }
  //       }
  //     } else if (modeGravity.checked == true) {
  //       moveDown();
  //     }
  //   }

  //   function moveOneDown(i: number) {
  //     if (
  //       squares[i].classList.contains('tetromino') &&
  //       !squares[i + width].classList.contains('ground')
  //     ) {
  //       if (squares[i].classList.contains('taken')) {
  //         if (
  //           !squares[i + width].classList.contains('taken') ||
  //           !modeInteraction.checked
  //         ) {
  //           squares[i + width].classList.add('tetromino');
  //           squares[i + width].classList.add('taken');
  //           squares[i + width].style.backgroundColor =
  //             squares[i].style.backgroundColor;
  //           squares[i].classList.remove('tetromino');
  //           squares[i].classList.remove('taken');
  //           squares[i].style.backgroundColor = '';
  //         }
  //       }
  //     }
  //   }

  //   function moveDown() {
  //     if (state === 'play') {
  //       if (modeGround.checked == false) {
  //         const end = (depth - 1) * width;
  //         const endRow = Array.from(Array(width), (_, i) => i + end);
  //         sendToClear(endRow, end);
  //       }
  //       undraw();
  //       currentPosition += width;
  //       if (superposition()) {
  //         currentPosition -= width;
  //         draw();
  //         if (modeProductive.checked == true) {
  //           location.replace('https://www.linkedin.com/jobs/');
  //         }
  //         if (modeLava.checked == true) {
  //           gameOver();
  //           return;
  //         }
  //         freeze();
  //       } else {
  //         clear();
  //         draw();
  //       }
  //       if (modeHomeo.checked == false) {
  //         for (let i = width * (depth - 1) - 1; i > -1; i--) {
  //           moveOneDown(i);
  //         }
  //       }
  //     }
  //   }

  //   function isAtRight() {
  //     return current.some((index) => (currentPosition + index + 1) % width === 0);
  //   }

  //   function isAtLeft() {
  //     return current.some((index) => (currentPosition + index) % width === 0);
  //   }

  //   function superposition() {
  //     if (modeInteraction.checked) {
  //       return current.some((index) =>
  //         squares[currentPosition + index].classList.contains('taken')
  //       );
  //     } else {
  //       return current.some((index) =>
  //         squares[currentPosition + index].classList.contains('ground')
  //       );
  //     }
  //   }

  //   function moveLeft() {
  //     if (state === 'play') {
  //       undraw();
  //       if (!isAtLeft()) currentPosition -= 1;
  //       if (superposition()) {
  //         currentPosition += 1;
  //       }
  //       draw();
  //     }
  //   }

  //   function moveRight() {
  //     if (state === 'play') {
  //       undraw();
  //       if (!isAtRight()) currentPosition += 1;
  //       if (superposition()) {
  //         currentPosition -= 1;
  //       }
  //       draw();
  //     }
  //   }

  //   function rotate() {
  //     if (state === 'play') {
  //       const tempPosition = currentPosition;
  //       const tempRotation = currentRotation;
  //       const currentTetromino = theTetrominoes[random]['rotations'];
  //       undraw();
  //       currentRotation = (currentRotation + 1) % currentTetromino.length;
  //       right = isAtRight();
  //       left = isAtLeft();
  //       current = currentTetromino[currentRotation];
  //       if (right ^ left) {
  //         while (true) {
  //           if (right) {
  //             if (isAtLeft()) {
  //               currentPosition -= 1;
  //             } else {
  //               break;
  //             }
  //           } else {
  //             if (isAtRight()) {
  //               currentPosition += 1;
  //             } else {
  //               break;
  //             }
  //           }
  //         }
  //       }
  //       if (superposition()) {
  //         currentRotation = tempRotation;
  //         currentPosition = tempPosition;
  //         current = currentTetromino[currentRotation];
  //       }
  //       draw();
  //     }
  //   }

  //   //Mechanics

  //   function blink(button: Element | null, newColor: string, oldColor: string) {
  //     return function () {
  //       blinkState = !blinkState;
  //       if (blinkState) {
  //         button.style.backgroundColor = newColor;
  //       } else {
  //         button.style.backgroundColor = oldColor;
  //       }
  //     };
  //   }

  //   musicBtn.addEventListener('click', () => {
  //     musicState = !musicState;
  //     if (musicState) {
  //       music.play();
  //       musicBtn.style.backgroundColor = redColor;
  //     } else {
  //       music.pause();
  //       musicBtn.style.backgroundColor = greenColor;
  //     }
  //   });

  //   restartBtn.addEventListener('click', () => {
  //     restart();
  //   });

  //   startBtn.addEventListener('click', () => {
  //     if (state === 'pause') {
  //       state = 'play';
  //       grid.style.backgroundColor = '#00000080';
  //       startBtn.style.backgroundColor = greenColor;
  //       draw();
  //       blinkState = false;
  //       clearInterval(timerColor);
  //       timerId = setInterval(gravity, timeStep);
  //       displayShape();
  //     } else if (state === 'prestart' || state === 'over') {
  //       restart();
  //     } else if (state === 'play') {
  //       state = 'pause';
  //       grid.style.backgroundColor = '#6EFF6B80';
  //       timerColor = setInterval(
  //         blink(startBtn, greenLight, greenColor),
  //         timeBlink
  //       );
  //       clearInterval(timerId);
  //     }
  //   });

  //   function restart() {
  //     state = 'play';
  //     startBtn.style.backgroundColor = greenColor;
  //     restartBtn.style.backgroundColor = redColor;
  //     grid.style.backgroundColor = '#00000080';
  //     blinkState = false;
  //     clearInterval(timerColor);
  //     squares.forEach((square) => {
  //       square.classList.remove('tetromino');
  //       square.classList.remove('taken');
  //       square.style.backgroundColor = '';
  //     });
  //     for (let i = 0; i < width; i++) {
  //       squares[width * depth + i].classList.add('taken');
  //     }
  //     score = 0;
  //     rowCount = 0;
  //     level = 0;
  //     levelDisplay.innerHTML = level;
  //     scoreDisplay.innerHTML = score;
  //     rowDisplay.innerHTML = rowCount;
  //     timeStep = speedDial * speedTable[Math.min(level, speedTable.length - 1)];
  //     drop = 1;
  //     filledRows = [];
  //     toClear = [];
  //     bonus = 0;
  //     currentPosition = startPosition;
  //     currentRotation = 0;
  //     nextRandom = newRandom();
  //     random = newRandom();
  //     current = theTetrominoes[random]['rotations'][currentRotation];
  //     clearInterval(timerId);
  //     draw();
  //     timerId = setInterval(gravity, timeStep);
  //     displayShape();
  //   }

  //   function freeze() {
  //     clearInterval(timerId);
  //     current.forEach((index) =>
  //       squares[currentPosition + index].classList.add('taken')
  //     );
  //     addScore();
  //     random = nextRandom;
  //     current = theTetrominoes[random]['rotations'][currentRotation];
  //     nextRandom = newRandom();
  //     currentPosition = startPosition;
  //     draw();
  //     displayShape();
  //     timerId = setInterval(gravity, timeStep);
  //     if (superposition()) {
  //       if (modeOpposite.checked == true) {
  //         let oppositeScore = 0;
  //         squares.forEach((square) => {
  //           if (square.classList.contains('tetromino')) {
  //             oppositeScore++;
  //           }
  //           square.classList.remove('tetromino');
  //           square.classList.remove('taken');
  //           square.style.backgroundColor = '';
  //         });
  //         rowCount += Math.floor(oppositeScore / width);
  //         rowDisplay.innerHTML = rowCount;
  //         bonus += bonusTable[Math.min(oppositeScore, bonusTable.length - 1)];
  //         for (let i = 0; i < width; i++) {
  //           squares[width * depth + i].classList.add('taken');
  //         }
  //       } else {
  //         gameOver();
  //       }
  //     }
  //   }

  //   function sendToClear(row: unknown, i: unknown) {
  //     row.forEach((index: string | number) => {
  //       if (squares[index].classList.contains('tetromino')) {
  //         squares[index].style.backgroundColor = '#ffffff';
  //       }
  //     });
  //     toClear.push([row, i]);
  //   }

  //   function clear() {
  //     toClear.forEach((line) => {
  //       line[0].forEach((index: string | number) => {
  //         squares[index].classList.remove('taken');
  //         squares[index].classList.remove('tetromino');
  //         squares[index].style.backgroundColor = '';
  //       });
  //       const squaresRemoved = squares.splice(line[1], width);
  //       squares = squaresRemoved.concat(squares);
  //       squares.forEach((cell) => grid.appendChild(cell));
  //     });
  //     toClear = [];
  //   }

  //   function addScore() {
  //     score += Math.min(
  //       drop *
  //         (1 + level) *
  //         (level + depth - Math.floor(currentPosition / width)),
  //       999
  //     );
  //     scoreDisplay.innerHTML = score;
  //     drop = 1;
  //     let bonusRow = 0;
  //     for (let i = 0; i < width * depth; i += width) {
  //       const row = Array.from(Array(width), (_, j) => j + i);
  //       if (row.every((index) => squares[index].classList.contains('taken'))) {
  //         if (modeOpposite.checked == true) {
  //           gameOver();
  //           return;
  //         }
  //         if (modeClearance.checked == true) {
  //           if (filledRows.includes(i)) {
  //             filledRows = filledRows.filter((item) => item !== i);
  //           } else {
  //             rowCount++;
  //             bonusRow++;
  //             rowDisplay.innerHTML = rowCount;
  //           }
  //           sendToClear(row, i);
  //         } else if (!filledRows.includes(i)) {
  //           filledRows.push(i);
  //           rowCount++;
  //           bonusRow++;
  //         }
  //       }
  //     }
  //     bonus += bonusTable[Math.min(bonusRow, bonusTable.length - 1)];
  //     if (modeClearance.checked == true && rowCount >= levelTreshold(level)) {
  //       level++;
  //       score += bonus;
  //       levelDisplay.innerHTML = level;
  //       scoreDisplay.innerHTML = score;
  //       bonus = 0;
  //       timerId = speedDial * speedTable[Math.min(level, speedTable.length - 1)];
  //     }
  //     clear();
  //   }

  //   function levelTreshold(level: number) {
  //     const len = levelTable.length - 1;
  //     return (
  //       levelTable[Math.min(level, len)] +
  //       (levelTable[len] - levelTable[len - 1]) * Math.max(0, level - len)
  //     );
  //   }

  //   function gameOver() {
  //     clearInterval(timerId);
  //     state = 'over';
  //     grid.style.backgroundColor = '#df000080';
  //     timerColor = setInterval(blink(restartBtn, redLight, redColor), timeBlink);
  //     if (modeClearance.checked == false) {
  //       score += bonus;
  //       scoreDisplay.innerHTML = score;
  //     }
  //   }

  return (
    <Layout
      summary={<Summary />}
      // backgroundStyle={{
      //   backgroundImage: 'url(/image/Tetris/russia.jpg)',
      //   backgroundColor: '#2f2d5d',
      //   backgroundSize: 'cover cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'top top',
      // }}
    >
      <>
        <div className={classes.container} id="frame">
          <div className={classes.upperGrid}>
            <div className={classes.grid}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          {/* <div className={classes.subContainer}>
            <div className={classes.miniGrid}></div>
            <h3 className={classes.data} id="level-text">
              Level : <span id="level">0</span>
            </h3>
            <h3 className={classes.data} id="row-text">
              Row : <span id="row">0</span>
            </h3>
            <h3 className={classes.data} id="score-text">
              Score : <span id="score">0</span>
            </h3>
            <button className={classes.button} role="button" id="music-button">
              ♫
            </button>
            <audio controls loop id="music" className={classes.notToSee}>
              <source src="music.mp3" type="audio/mpeg" />
            </audio>
            <button className={classes.button} role="button" id="start-button">
              ▶ / II
            </button>
            <button
              className={classes.button}
              role="button"
              id="restart-button"
            >
              ↺
            </button>
          </div> */}
          {/* <div className={classes.modeContainer}>
            <h1>Modes</h1>
            <label className={classes.mode}>
              Gravity
              <input type="checkbox" checked={true} id="gravity-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Ground
              <input type="checkbox" checked={true} id="ground-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Clearance
              <input type="checkbox" checked={true} id="clearance-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Colors
              <input type="checkbox" checked={true} id="eyes-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Homeostasis
              <input type="checkbox" checked={true} id="homeo-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Interaction
              <input type="checkbox" checked={true} id="interaction-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Tetrominoes
              <input type="checkbox" checked={true} id="four-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Simplex
              <input type="checkbox" id="mono-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Roblox
              <input type="checkbox" id="roblox-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Fast
              <input type="checkbox" id="hard-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Lava
              <input type="checkbox" id="lava-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Opposite
              <input type="checkbox" id="opposite-check" />
              <span className={classes.checkmark}></span>
            </label>
            <label className={classes.mode}>
              Productive
              <input type="checkbox" id="productive-check" />
              <span className={classes.checkmark}></span>
            </label>
          </div> */}
          {/* <div className={classes.directionalButtons}>
            <button
              className={classes.directionButtonUp}
              role="button"
              id="up-button"
            >
              <span className={classes.visuallyHidden}></span>
            </button>
            <button
              className={classes.directionButtonLeft}
              role="button"
              id="left-button"
            >
              <span className={classes.visuallyHidden}></span>
            </button>
            <button
              className={classes.directionButtonRight}
              role="button"
              id="right-button"
            >
              <span className={classes.visuallyHidden}></span>
            </button>
            <button
              className={classes.directionButtonDown}
              role="button"
              id="down-button"
            >
              <span className={classes.visuallyHidden}></span>
            </button>
          </div> */}
        </div>
      </>
    </Layout>
  );
};

const gameWidth = 10;
const gameDepth = 20;
// const displayWidth = 5;
// const displayDepth = 6;
// const gameRatio = gameWidth / gameDepth;
// const displayRatio = displayWidth / displayDepth;

const useStyles = createStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  //   subContainer: {
  //     backgroundImage: 'none',
  //     height: '100%',
  //     aspectRatio: `${displayWidth} / ${gameDepth}`,
  //     display: 'block',
  //     paddingLeft: '1em',
  //   },
  upperGrid: {
    backgroundImage: 'none',
    height: '100%',
    aspectRatio: `${gameWidth} / ${gameDepth}`,
    display: 'block',
    paddingLeft: '1em',
    marginBottom: 16,
  },
  grid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '1%',
    outline: 'solid transparent',
    outlineColor: 'rgba(255, 255, 255, 0.5)',
    '& div': {
      width: `${100 / gameWidth}%`,
      aspectRatio: '1 / 1',
    },
  },
  //   tetromino: {
  //     backgroundColor: 'rgba(0, 0, 0, 0)',
  //     borderRadius: '20%',
  //     outline: 'solid',
  //     outlineColor: 'rgba(0, 0, 0, 0.2)',
  //   },
  //   miniGrid: {
  //     width: '100%',
  //     aspectRatio: `${displayRatio} / 1`,
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //     borderRadius: '1%',
  //     outline: 'solid transparent',
  //     outlineColor: 'rgba(255, 255, 255, 0.5)',
  //     '& div': {
  //       width: `${100 / displayWidth}%`,
  //       aspectRatio: '1 / 1',
  //     },
  //   },
  //   data: {
  //     backgroundColor: '#bea903',
  //     border: 'solid transparent',
  //     borderRadius: 16,
  //     borderWidth: '0 0 4',
  //     boxSizing: 'border-box',
  //     color: '#ffffff',
  //     display: 'inline-block',
  //     fontFamily: 'din-round, sans-serif',
  //     fontSize: 'auto',
  //     fontWeight: 700,
  //     overflow: 'visible',
  //     padding: '13px 16',
  //     textAlign: 'center',
  //     textTransform: 'uppercase',
  //     touchAction: 'manipulation',
  //     transform: 'translateZ(0)',
  //     transition: 'filter 0.2s',
  //     userSelect: 'none',
  //     WebkitUserSelect: 'none',
  //     verticalAlign: 'middle',
  //     whiteSpace: 'nowrap',
  //     width: 'auto',
  //   },
  //   button: {
  //     appearance: 'button',
  //     backgroundColor: '#1fa812',
  //     border: 'solid transparent',
  //     borderRadius: 16,
  //     borderWidth: '0 0 4',
  //     boxSizing: 'border-box',
  //     color: '#ffffff',
  //     cursor: 'pointer',
  //     display: 'inline-block',
  //     fontFamily: 'din-round, sans-serif',
  //     fontSize: 15,
  //     fontWeight: 700,
  //     letterSpacing: 0.8,
  //     lineHeight: 20,
  //     margin: 0,
  //     outline: 'none',
  //     overflow: 'visible',
  //     padding: '13px 16px 13px 16',
  //     textAlign: 'center',
  //     textTransform: 'uppercase',
  //     touchAction: 'manipulation',
  //     transform: 'translateZ(0)',
  //     transition: 'filter 0.2s',
  //     userSelect: 'none',
  //     WebkitUserSelect: 'none',
  //     verticalAlign: 'middle',
  //     whiteSpace: 'nowrap',
  //     width: 'auto',
  //   },
  //   'button:after': {
  //     backgroundClip: 'padding-box',
  //     backgroundColor: '#ffffff49',
  //     border: 'solid transparent',
  //     borderRadius: 16,
  //     borderWidth: '0 0 4',
  //     bottom: -4,
  //     left: 0,
  //     position: 'absolute',
  //     right: 0,
  //     top: 0,
  //     zIndex: -1,
  //   },
  //   'button:main, .button:focus': {
  //     userSelect: 'auto',
  //   },
  //   'button:hover:not(:disabled)': {
  //     filter: 'brightness(1.1)',
  //   },
  //   'button:disabled': {
  //     cursor: 'auto',
  //   },
  //   directionalButtons: {
  //     backgroundImage: 'none',
  //     marginLeft: 50,
  //     marginRight: 50,
  //     marginTop: 50,
  //     width: '32rem',
  //     height: '32rem',
  //     display: 'grid',
  //     gridGap: '0.5rem',
  //     gridTemplateColumns: '45fr 60fr 45fr',
  //     gridTemplateRows: '45fr 60fr 45fr',
  //     gridTemplateAreas: '....  up  .....left  ..  right.... down .....',
  //   },
  //   directionButton: {
  //     color: 'rgb(65, 9, 156)',
  //     background: 'currentcolor',
  //     border: 'none',
  //     position: 'relative',
  //   },
  //   'directionButton:before': {
  //     display: 'block',
  //     position: 'absolute',
  //     width: '8.8rem',
  //     height: '8.8rem',
  //     transform: 'rotate(45deg)',
  //     background: 'currentcolor',
  //   },
  //   'directionButton:after': {
  //     display: 'block',
  //     position: 'absolute',
  //     border: '4rem solid transparent',
  //     color: 'rgba(255, 250, 250, 0.6)',
  //   },
  //   'directionButton:hover': {
  //     color: 'rgb(86, 7, 160)',
  //   },
  //   'directionButton:active:after': {
  //     color: 'rgb(167, 124, 236)',
  //   },
  //   directionButtonUp: {
  //     gridArea: 'up',
  //     borderRadius: '1rem 1rem 0 0',
  //   },
  //   'up:before': {
  //     left: 'calc(50% - 4.4rem)',
  //     bottom: '-4.4rem',
  //   },
  //   'up:after': {
  //     borderBottomColor: 'currentcolor',
  //     left: 'calc(50% - 4rem)',
  //     top: '-2rem',
  //   },
  //   directionButtonLeft: {
  //     gridArea: 'left',
  //     borderRadius: '1rem 0 0 1rem',
  //   },
  //   'left:before': {
  //     right: '-4.4rem',
  //     top: 'calc(50% - 4.4rem)',
  //   },
  //   'left:after': {
  //     borderRightColor: 'currentcolor',
  //     top: 'calc(50% - 4rem)',
  //     left: '-2rem',
  //   },
  //   directionButtonRight: {
  //     gridArea: 'right',
  //     borderRadius: '0 1rem 1rem 0',
  //   },
  //   'right:before': {
  //     left: '-4.4rem',
  //     top: 'calc(50% - 4.4rem)',
  //   },
  //   'right:after': {
  //     borderLeftColor: 'currentcolor',
  //     top: 'calc(50% - 4rem)',
  //     right: '-2rem',
  //   },
  //   directionButtonDown: {
  //     gridArea: 'down',
  //     borderRadius: '0 0 1rem 1rem',
  //   },
  //   'down:before': {
  //     left: 'calc(50% - 4.4rem)',
  //     top: '-4.4rem',
  //   },
  //   'down:after': {
  //     borderTopColor: 'currentcolor',
  //     left: 'calc(50% - 4rem)',
  //     bottom: '-2rem',
  //   },
  //   modeContainer: {
  //     backgroundColor: '#7303be',
  //     border: 'solid transparent',
  //     borderRadius: 16,
  //     borderWidth: '0 0 4',
  //     boxSizing: 'border-box',
  //     color: '#ffffff',
  //     display: 'inline-block',
  //     fontFamily: 'din-round, sans-serif',
  //     fontSize: 'auto',
  //     fontWeight: 700,
  //     overflow: 'visible',
  //     padding: '13px 16',
  //     textAlign: 'center',
  //     textTransform: 'uppercase',
  //     touchAction: 'manipulation',
  //     transform: 'translateZ(0)',
  //     transition: 'filter 0.2s',
  //     userSelect: 'none',
  //     WebkitUserSelect: 'none',
  //     verticalAlign: 'middle',
  //     whiteSpace: 'nowrap',
  //     width: 'auto',
  //     height: '100%',
  //     marginLeft: 16,
  //   },
  //   mode: {
  //     display: 'block',
  //     position: 'relative',
  //     paddingLeft: 35,
  //     marginBottom: 12,
  //     cursor: 'pointer',
  //     fontSize: 22,
  //     WebkitUserSelect: 'none',
  //     MozUserSelect: 'none',
  //     msUserSelect: 'none',
  //     userSelect: 'none',
  //   },
  //   /* Hide the browser's default checkbox */
  //   'mode input': {
  //     position: 'absolute',
  //     opacity: 0,
  //     cursor: 'pointer',
  //     height: 0,
  //     width: 0,
  //   },
  //   /* Create a custom checkbox */
  //   checkmark: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     height: 25,
  //     width: 25,
  //     backgroundColor: '#eee',
  //   },
  //   /* On mouse-over, add a grey background color */
  //   'mode:hover input ~ .checkmark': {
  //     backgroundColor: '#ccc',
  //   },
  //   /* When the checkbox is checked, add a blue background */
  //   'mode input:checked ~ .checkmark': {
  //     backgroundColor: '#2196f3',
  //   },
  //   /* Create the checkmark/indicator (hidden when not checked) */
  //   'checkmark:after': {
  //     position: 'absolute',
  //     display: 'none',
  //   },
  //   /* Show the checkmark when checked */
  //   'mode input:checked ~ .checkmark:after': {
  //     display: 'block',
  //   },
  //   /* Style the checkmark/indicator */
  //   'mode checkmark:after': {
  //     left: 9,
  //     top: 5,
  //     width: 5,
  //     height: 10,
  //     border: 'solid white',
  //     borderWidth: '0 3px 3px 0',
  //     WebkitTransform: 'rotate(45deg)',
  //     msTransform: 'rotate(45deg)',
  //     transform: 'rotate(45deg)',
  //   },
  //   notToSee: {
  //     visibility: 'hidden',
  //   },
  //   visuallyHidden: {},
}));

export default Resume;
