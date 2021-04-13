/**
* ABOUT
*
* DATE: 2021-04-13
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12939
*
* COMMENT:
* split()을 사용하여 숫자들을 배열에 담아둔 후
* 하나씩 비교하며 최솟값과 최댓값을 찾으면 되는 간단한 문제이다
**/

function solution(s) {
    s = s.split(' ');
    
    let maxNum = s[0];
    let minNum = s[0];
    s.forEach(num => {
        if (Number(num) > Number(maxNum)) {
            maxNum = num;
        }
        else if (Number(num) < Number(minNum)) {
            minNum = num;
        }
    });
    
    return `${minNum} ${maxNum}`;
}