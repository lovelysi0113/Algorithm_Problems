/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/68644
*
* COMMENT:
* 두 개의 수를 선택하는 모든 경우의 수에서 겹치는 값을 제외해준다
* 새로운 객체를 선언하고 key=두 수의 합으로 하여 겹치는 값이 있는지 확인해주었다
**/

function solution(numbers) {
    let answer = {};
    for (let one = 0; one < numbers.length; one++) {
        for (let two = one+1; two < numbers.length; two++) {
            let sum = numbers[one] + numbers[two];
            if (answer[sum] === undefined) {
                answer[sum] = true;
            }
        }
    }
    
    return Object.keys(answer).map(num => Number(num)).sort((a,b) => a-b);
}