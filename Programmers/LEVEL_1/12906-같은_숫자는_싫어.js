/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12906
*
* COMMENT:
* 연속적으로 나타나지 않을 때만 정답 배열에 넣어준다
**/

function solution(arr)
{
    var answer = [];
    let lastIdx = -1;

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] !== answer[lastIdx]) {
            answer.push(arr[idx]);
            lastIdx++;
        }
    }
    
    return answer;
}