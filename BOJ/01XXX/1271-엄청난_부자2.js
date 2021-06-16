/**
 * ABOUT
 *
 * DATE: 2021-06-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1271
 *
 * COMMENT:
 * 한 생명체에게 얼마씩 돈을 줄 수 있는가? -> 몫
 * 생명체들에게 동일하게 분배한 후 남는 돈은 얼마인가? -> 나머지
 **/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => BigInt(el));
}).on("close", function () {
  let [money, total] = input;
  console.log((money / total).toString());
  console.log((money % total).toString());

  process.exit();
});