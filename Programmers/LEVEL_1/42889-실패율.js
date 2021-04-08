/**
* ABOUT
*
* DATE: 2021-04-08
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42889
*
* COMMENT:
* 각 스테이지에 몇명의 유저가 있는지 구한다음 문제에 나온 공식대로 실패율을 구한다
* 실패율이 높은 스테이지 순서대로 정렬하면 된다
**/

function solution(N, stages) {
    // 각 스테이지마다 몇명의 사용자가 있는지 저장
    let count = {};
    stages.forEach(stage => {
        if (count[stage] === undefined) {
            count[stage] = 1;
        } else {
            count[stage] += 1;
        }
    });
    
    // 각 스테이지의 실패율을 구하기
    let clear = stages.length;
    let failure = {};
    for (let stage = 1; stage < N+1; stage++) {
        if (count[stage] !== undefined) {
            failure[stage] = count[stage] / clear;
            clear -= count[stage];
        }
        else {
            failure[stage] = 0;
        }
    }
    
    // 실패율 높은 순서대로 정렬하기
    return Object.keys(failure).sort((a,b) => {
        let A = failure[a];
        let B = failure[b];
        if (A > B) return -1;
        if (A < B) return 0;
        if (A === B) return Number(a) - Number(b);
    }).map(stage => Number(stage));
}