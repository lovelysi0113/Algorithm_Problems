/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42576
*
* COMMENT:
* [ 해시 ]
* 정렬 후 이름을 비교한다
**/

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    let len = participant.length;
    
    for (let idx = 0; idx < len; idx++) {
        if (participant[idx] !== completion[idx]) {
            return participant[idx];
        }
    }
    
    return participant[len-1];
}