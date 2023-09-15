const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function read() {
  const text = fs.readFileSync("./puzzles.txt", "utf-8").trim().split(`${EOL}`);
  return text.map((el) => el.split(""));
}

//Никита
function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

//Диана
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

//Гриша
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


//Гриша
function prettyBoard() {
}
const prettyBoard()