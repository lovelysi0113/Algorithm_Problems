/**
 * ABOUT
 *
 * DATE: 2021-06-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/68645
 *
 * COMMENT:
 * 맨 위 꼭지점(answer[0][0])부터 달팽이 채우기를 진행하면 된다
 * 1. 아래로 내려가면서 채우기
 * 2. 옆으로 가면서 채우기(왼 -> 오)
 * 3. 위로 올라가면서 채우기
 * 모두 채울 때까지 1~3 과정이 반복된다
 * 그리고 이 과정은 한 단계씩 진행될 때마다 채우는 갯수가 처음 n개에서 1개씩 줄어든다
 * 이 규칙을 활용하여 달팽이 채우기를 진행할 수 있다
 **/

function solution(n) {
  // 삼각형 만들기
  const answer = new Array(n)
    .fill()
    .map((el, idx) => new Array(idx + 1).fill(0));

  // 달팽이 채우기
  let num = 0;
  let x = -1;
  let y = 0;
  while (n > 0) {
    // 아래로 채우기
    for (let idx = 0; idx < n; idx++) {
      x += 1;
      num += 1;
      answer[x][y] = num;
    }
    // 옆으로 채우기
    for (let idx = 0; idx < n - 1; idx++) {
      y += 1;
      num += 1;
      answer[x][y] = num;
    }
    // 위로 채우기
    for (let idx = 0; idx < n - 2; idx++) {
      x -= 1;
      y -= 1;
      num += 1;
      answer[x][y] = num;
    }
    n -= 3;
  }

  return answer.reduce((arr, el) => [...arr, ...el], []);
}