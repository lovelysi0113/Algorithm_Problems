/**
* ABOUT
*
* DATE: 2021-04-12
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42747
*
* COMMENT:
* [ 정렬 ]
* 논문별 인용 횟수가 담긴 배열을 내림차순으로 정렬한 후
* 인용횟수가 citations[idx]보다 큰 논문의 개수를 구한다 = h
**/

function solution(citations) {
    citations.sort((a,b) => b-a);

    let answer = 0;
    while (answer < citations.length) {
        if (answer + 1 <= citations[answer]) {
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
}