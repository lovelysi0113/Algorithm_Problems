/**
 * ABOUT
 *
 * DATE: 2021-06-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1550
 *
 * COMMENT:
 * parseInt(num, 16)을 하면 16진수인 num을 10진수로 변환할 수 있다
 **/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
  input += line;
}).on("close", function () {
  console.log(parseInt(input, 16));

  process.exit();
});