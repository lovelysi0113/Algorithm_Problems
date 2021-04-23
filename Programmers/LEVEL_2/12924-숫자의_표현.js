/**
* ABOUT
*
* DATE: 2021-04-23
* AUTHOR: lovelysi0113
*
* URL: https: // programmers.co.kr/learn/courses/30/lessons/12924
*
* COMMENT:
* 1부터 n / 2까지 하나씩 숫자들을 더해보며 합이 n이 되는 경우를 찾는다
* 이때 n/2 까지만 검사하는 이유는 n / 2 이상의 연속되는 수의 합은 무조건 n을 넘기때문에
* 굳이 확인안해봐도 된다(경우의 수에서 제외)
* 그리고 n 하나의 합은 무조건 n이므로 경우의 수는 무조건 1 이상이 된다
**/

function solution(n) {
    var answer = 1;
    
    for (let num = 1; num <= parseInt(n / 2); num++) {
        let result = num;
        for (let chk = num+1; chk <= parseInt(n / 2) + 1; chk++) {
            result += chk;
            if (result === n) {
                answer += 1;
                break;
            } else if (result > n) {
                break;
            }
        }
    }
    return answer;
}