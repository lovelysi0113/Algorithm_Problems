/**
* ABOUT
* DATE: 2021-06-03
* AUTHOR: lovelysi0113
* 
* URL: https://programmers.co.kr/learn/courses/30/lessons/12973
* 
* COMMENT:
* stack에 문자열 s의 알파벳을 하나씩 넣으면서(push)
* 맨 위 두개의 알파벳이 같으면 두 개를 모두 빼내는(pop) 작업을 반복한다
* stack에 s를 모두 넣은 후에 남은 문자가 있는지를 체크하여 문자열을 모두 제거할 수 있는지 확인할 수 있다
**/

function solution(s) {
    let stack = [];
    for (let idx = 0; idx < s.length; idx++) {
        stack.push(s[idx]);
        let len = stack.length;
        if (stack[len-1] === stack[len-2]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}

/*
// 효율성에서 실패(시간초과)
function solution(s) {
    s = s.split('');
    let chk = 1;
    while(s.length > 0) {
        let isRemove = false;
        for (let idx = chk; idx < s.length; idx++) {
            if (s[idx-1] === s[idx]) {
                isRemove = true;
                s.splice(idx-1, 2);
                break;
            }
        }
        if (!isRemove) {
            break;
        }
    }
    
    return s.length === 0 ? 1 : 0;
}
*/