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

}

function prettyBoard() {
}
const prettyBoard