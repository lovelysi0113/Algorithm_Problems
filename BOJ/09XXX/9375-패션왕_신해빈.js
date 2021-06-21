/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/9375
 *
 * COMMENT:
 * 의상의 종류별로 각각 옷이 몇개 있는지 구한 다음에
 * 모든 경우의 수를 구한다(경우의 수 곱의 법칙)
 * 마지막에 -1을 하는 이유는 1가지 경우는 모든 옷을 안입을 때이므로 문제의 조건에 맞지않아 제외하는 것이다
 **/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let idx = 0;
  for (let test = 0; test < parseInt(input[0]); test++) {
    let total = parseInt(input[++idx]);
    let closet = {};
    for (let num = 0; num < total; num++) {
      let cloth = input[++idx].split(" ");
      if (closet[cloth[1]] === undefined) {
        closet[cloth[1]] = 1;
      }
      closet[cloth[1]] += 1;
    }
    let answer = Object.keys(closet).reduce((answer, kind) => {
      return answer * closet[kind];
    }, 1);
    console.log(answer - 1);
  }

  process.exit();
});