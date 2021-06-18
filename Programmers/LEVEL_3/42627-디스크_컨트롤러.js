/**
 * ABOUT
 *
 * DATE: 2021-06-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42627
 *
 * COMMENT:
 * [ 힙(Heap) ]
 * 우선 jobs에 있는 작업들을 작업이 요청되는 시점을 기준으로 오름차순 정렬한다
 * 그리고 현재 시간을 토대로 다음과 같은 작업을 실행한다
 * 1. 현재 시간까지 요청이 들어온 작업들을 대기목록에 넣는다
 * 1-1. 작업이 요청되는 시점보다 현재 시간이 더 크다면 그 작업을 대기목록에 넣는다
 * 1-2. 대기목록을 작업의 소요시간을 기준으로 오름차순 정렬한다(소요시간이 짧은 작업부터 수행할 예정)
 * 2. 하드디스크에서 작업을 수행한다
 * 2-1. 대기목록이 비어있다면 수행할 작업이 없다는 의미이므로 현재 시간을 jobs의 첫번째 작업의 요청 시간으로 변경한다
 * 2-2. 대기목록에 수행할 작업이 있다면 앞에서부터 하나씩 작업을 수행한 후 그 작업이 걸린 시간을 구해준다
 * 2-3. 현재 시간을 작업이 완료된 시점으로 변경한다(소요 시간을 더해줌)
 * 2-4. 작업의 요청부터 종료까지 걸린 시간 = 현재 시간 - 요청 시점
 * 작업목록(jobs)과 대기목록(pQueue)이 빌 때까지 1~2 과정을 반복한다
 **/

function solution(jobs) {
  // 요청 시간을 오름차순으로 정렬
  jobs.sort((a, b) => a[0] - b[0]);

  let nowTime = 0; // 현재 시간
  let jobsTime = []; // 각 작업의 요청부터 종료까지 걸린 시간

  let pQueue = []; // 수행할 작업들이 저장되어 있는 큐(대기목록)

  while (jobs.length > 0 || pQueue.length > 0) {
    // 1. 현재 시간까지 요청이 들어온 작업들을 대기목록에 넣기
    while (jobs.length > 0 && jobs[0][0] <= nowTime) {
      pQueue.push(jobs.shift());
      // 소요 시간을 오름차순으로 정렬
      pQueue.sort((a, b) => a[1] - b[1]);
    }
    // 2. 작업 수행하기
    if (pQueue.length === 0) {
      // 대기목록이 비어있다면 현재 시간을 jobs의 첫번째 작업의 요청시간으로 변경하기
      nowTime = jobs[0][0];
    } else {
      // 대기목록에서 작업 하나씩 수행하기
      let [startTime, workTime] = pQueue.shift();
      nowTime += workTime;
      jobsTime.push(nowTime - startTime);
    }
  }

  // 작업의 요청부터 종료까지 걸린 시간의 평균 구하기
  return parseInt(
    jobsTime.reduce((sum, time) => sum + time, 0) / jobsTime.length
  );
}