
const fs = require("fs");
const { EOL, endianness } = require("os");
const chalk = require('chalk'); 

function read() {
  const text = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split(`${EOL}`);
  return text.map((el) => el.split(''));
}
const one = read();


function solve(arr) {
  let randomArr = arr[randomBoardEasy()];
  return randomArr;
}

const flex = one[6];


function sort(randomArr) {
  let arr = [];
  for (let i = 0; i < randomArr.length; i += 9) {
    let n = randomArr.slice(i, i + 9);
    arr.push(n);
  }
  return arr;
}
const sorts = sort(flex);


function solveFin(array) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (array[r][c] === '-') {
        for (let i = 1; i < 10; i++) {
          let valid = true;
          for (let j = 0; j < 9; j++) {
            if (array[j][c] == i || array[r][j] == i) {
              valid = false;
            }
          }
          if (valid) {
            array[r][c] = i.toString();
          }
        }
      }
    }
  }
  return array;
}

const final = solveFin(sorts)

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  
}
isSolved(solveFin(sorts));


function prettyBoard() {
  console.log(chalk.red('   🚨🚨🚨!!!WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨'))
  console.table(final)
  console.log(chalk.red('   🚨🚨🚨!!!WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨'))
}


module.exports = {
  prettyBoard,
  isSolved,
  sort,
  solve,
  read,
  solveFin,
}