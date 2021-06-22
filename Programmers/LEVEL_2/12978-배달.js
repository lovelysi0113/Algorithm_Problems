/**
 * ABOUT
 * DATE: 2021-06-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12978
 *
 * COMMENT:
 * 우선 입력으로 주어진 road 정보를 토대로 map을 만든다
 * (map[a][b] = time: 마을 a에서 마을 b까지 가는데 걸리는 시간은 time)
 * 그리고 1번 마을부터 시작하여 다른 마을로 이동하면서 걸리는 최소 시간을 구한다
 **/

function solution(N, road, K) {
  // 도로 정보 표시
  let map = new Array(N + 1);
  for (let idx = 0; idx < N + 1; idx++) {
    map[idx] = new Array(N + 1).fill(Infinity);
  }
  road.forEach((el) => {
    let [a, b, time] = el;
    map[a][b] = Math.min(map[a][b], time);
    map[b][a] = Math.min(map[b][a], time);
  });

  // 1번 마을에서 n번 마을까지 가는데 걸리는 최소 시간 구하기
  let minTime = Array(N + 1).fill(Infinity);

  // 방문할 마을 목록
  let queue = [1];
  minTime[1] = 0;

  // 각 마을로 가는 최소 시간 구하기
  while (queue.length > 0) {
    let now = queue.shift();
    map[now].forEach((time, town) => {
      if (time !== 0) {
        if (minTime[town] > minTime[now] + time) {
          // 다음 이동할 마을의 최소 시간 > 현재 마을까지의 이동 시간 + 다음 마을로 이동하는 시간
          minTime[town] = minTime[now] + time;
          queue.push(town);
        }
      }
    });
  }

  // 배달 주문을 받을 수 있는 마을의 개수 구하기
  return minTime.filter((town) => town <= K).length;
}