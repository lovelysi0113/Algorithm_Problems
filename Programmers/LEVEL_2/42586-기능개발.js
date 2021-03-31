/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42586
*
* COMMENT:
* [ 스택 / 큐 ]
* 큐를 사용하여 한번에 배포 가능한 것들을 꺼낸다
**/

function solution(progresses, speeds) {
    // 각 기능이 걸리는 시간 구하기
    let works = progresses.map((progress, idx) => {
        return Math.ceil((100-progress) / speeds[idx]);
    });
    
    // 배포하기
    let answer = [];
    while (works.length > 0) {
        let canDistribute = works.shift();
        let cntWork = 1;
        while (works[0] <= canDistribute) {
            works.shift();
            cntWork++;
        }
        answer.push(cntWork);
    }
    return answer;
}