/**
* ABOUT
*
* DATE: 2021-04-11
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12982
*
* COMMENT:
* 작은 금액부터 더한 값이 예산보다 커지지 않는 최대 부서의 수를 구한다
**/

function solution(d, budget) {
    // 각 부서에서 신청한 금액의 합이 예산 이하일때
    if (budget >= d.reduce((sum, money) => sum + money, 0)) {
        return d.length;
    }
    
    // 작은 금액부터 하나씩 더해가기
    d.sort((a,b) => a-b);
    let answer = 0;
    let sum = 0;
    for (let idx = 0; idx < d.length; idx++) {
        sum += d[idx];
        answer += 1;
        if (sum > budget) {
            return answer-1;
        }
    }
    
    return answer;
}