/**
* ABOUT
*
* DATE: 2021-04-03
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12943
*
* COMMENT:
* 문제에 나온대로 num이 짝수/홀수인지 판단하여 작업을 진행하면 된다
**/

function solution(num) {
    let count = 0;
    
    while (count < 500 && num > 1) {
        // 1-1
        if (num % 2 == 0) {
            num = num / 2;
        }
        // 1-2
        else {
            num = num * 3 + 1;
        }
        count++;
    }
    
    return count < 500 ? count : -1;
}