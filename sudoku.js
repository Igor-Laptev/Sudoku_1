const fs = require("fs");
const { EOL } = require("os");
const chalk = require('chalk'); 



function read() {
  const text = fs.readFileSync("./puzzles.txt", "utf-8").trim().split(`${EOL}`);
  return text.map((el) => el.split(""));
}

const one = read();

function randomBoardEasy() {
  return Math.floor(Math.random() * 6);
}

//Никита
function solve(arr) {
  let randomArr = arr[randomBoardEasy()];
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  return randomArr;
}
const flex = solve(one);
// console.log(solve(read()));

//greg nikita igor' diana
function sort(randomArr) {
  let arr = [];
  for (let i = 0; i < randomArr.length; i += 9) {
    let n = randomArr.slice(i, i + 9);
    arr.push(n);
  }
  return arr;
}
const sorts = sort(flex);

console.log(sorts);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

//Диана
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

//Гриша
function prettyBoard() {
  console.log(chalk.red('   🚨🚨🚨!!!WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨'))
  console.table(sorts)
  console.log(chalk.red('   🚨🚨🚨!!!WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨WARNING!!!🚨🚨🚨'))
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


module.exports = {
  prettyBoard,
  isSolved,
  sort,
  solve,
  randomBoardEasy,
  read,
}