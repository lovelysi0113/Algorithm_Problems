/**
 * ABOUT
 *
 * DATE: 2021-06-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2805
 *
 * COMMENT:
 * 절단기 높이(0 ~ 가장 긴 나무의 높이) 범위에서 이분탐색을 하며
 * 절단기에 설정할 수 있는 높이의 최댓값을 찾는다
 * 절단기에 설정할 높이를 중간값으로 가정한 다음
 * 이 길이에서 나올 수 있는 잘린 나무들의 총 길이를 구한다
 * 이 합을 M과 비교하여 작으면 절단기 높이 범위의 최댓값을 줄이고
 * M보다 크면 절단기 높이 범위의 최솟값을 키우는 방식으로 진행하여
 * 가능한 높이 중 가장 최댓값을 구한다
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
  let [N, M] = input[0].split(" ").map((el) => parseInt(el));
  let trees = input[1].split(" ").map((el) => parseInt(el));
  trees.sort((a, b) => a - b);

  let minHeight = 0;
  let maxHeight = trees[N - 1];
  let answer = minHeight;

  while (minHeight <= maxHeight) {
    let midHeight = Math.floor((minHeight + maxHeight) / 2);
    let cutTree = 0;
    trees.forEach((tree) => {
      if (tree > midHeight) {
        cutTree += tree - midHeight;
      }
    });
    if (cutTree >= M) {
      answer = Math.max(answer, midHeight);
      minHeight = midHeight + 1;
    } else {
      maxHeight = midHeight - 1;
    }
  }

  console.log(answer);

  process.exit();
});