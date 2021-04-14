/**
* ABOUT
*
* DATE: 2021-04-14
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/64065
*
* COMMENT:
* 특정 튜플을 표현하는 집합이 담긴 문자열 s를 계산하기 쉽게 배열로 정리한다
* 원소가 1개인 튜플부터 하나씩 정답 배열에 넣으며 최대 길이의 튜플을 만든다
* 배열로 만든 후 바로 최대 길이를 답으로 제출하지 않는 이유는
* 문자열 s에 담긴 튜플들은 순서에 상관없이 원소들이 튜플에 담겨있기 때문이다
**/

function solution(s) {
    // 튜플의 집합이 담긴 문자열 s를 배열로 정리
    s = s.slice(2, s.length-2).split('},{');
    s.sort((a, b) => a.length - b.length);
    s = s.map(tuple => tuple.split(',').map(num => Number(num)));
    
    // 하나씩 정답 배열에 넣기
    let answer = [];
    s.forEach((tuple, idx) => {
        let num = tuple[0];
        answer.push(num);
        for (let chk = idx; chk < s.length; chk++) {
            s[chk].splice(s[chk].indexOf(num), 1);
        }
    });
    
    return answer;
}