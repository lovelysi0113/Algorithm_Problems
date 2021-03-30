/**
* ABOUT
*
* DATE: 2021-03-30
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42840
*
* COMMENT:
* [ 완전탐색 ]
* 각각 몇문제를 맞추었는지 계산한 후
* 가장 많은 문제를 맞힌 사람을 찾는다
**/

function solution(answers) {
    let person1 = [1, 2, 3, 4, 5];
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let len1 = person1.length;
    let len2 = person2.length;
    let len3 = person3.length;
    
    let test = [0, 0, 0, 0];
    
    // 각각 몇 문제 맞추었는지 구하기
    answers.forEach((answer, idx) => {
        if (answer === person1[idx % len1]) {
            test[1] += 1;
        }
        if (answer === person2[idx % len2]) {
            test[2] += 1;
        }
        if (answer === person3[idx % len3]) {
            test[3] += 1;
        }
    });
    
    // 가장 많은 문제를 맞힌 사람 구하기
    let max = test.reduce((max, num) => Math.max(max, num));
    
    let result = [];
    test.forEach((num, person) => {
        if (max === num) {
            result.push(person);
        }
    });
    return result;
}