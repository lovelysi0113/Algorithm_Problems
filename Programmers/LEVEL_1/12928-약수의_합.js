/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12928
*
* COMMENT:
* 1~제곱근(n)의 범위에서 n의 약수+짝을 찾아 더해주었다
* 테스트 케이스에서 특이한 경우를 고려해주는 부분이 어려웠다
* (n = 0일때, n = 1일때, n = 제곱의 수 일때)
**/

function solution(n) {
    if (n === 0 || n === 1) return n;
    
    let answer = 0;
    
    for (let num = 1; num <= Math.sqrt(n); num++) {
        if (n % num === 0) {
            answer += num;
            if (n / num !== num) {
                answer += n / num;
            }
        }
    }
    
    return answer;
}