const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function read() {

  const text = fs.readFileSync("./puzzles.txt", "utf-8").trim().split(`${EOL}`);
  return text.map((el) => el.split(""));

}

function solve() {

}

function isSolved() {
 
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  //



}

function prettyBoard() {
}
const prettyBoard