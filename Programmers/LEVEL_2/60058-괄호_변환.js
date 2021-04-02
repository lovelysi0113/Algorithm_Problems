/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/60058
*
* COMMENT:
* 문제에 나온 순서대로 한단계씩 코드를 작성하여 "올바른 괄호 문자열"을 만들면 된다
**/

function solution(p) {
    // p가 "올바른 괄호 문자열"인지 확인
    if (chkCorrectBracket(p)) {
        // p가 이미 "올바른 괄호 문자열"이라면 그대로 return
        return p;
    } else {
        // p를 "올바른 괄호 문자열"로 변환
        return makeCorrectBracket(p);
    }
}

// 올바른 괄호 문자열인지 확인하는 함수
function chkCorrectBracket(str) {
    // '('와 ')' 개수로 올바른 괄호 문자열인지 확인한다
    let open = 0, close = 0; // open = '('의 개수, close = ')'의 개수
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] === '(') {
            open += 1;
        }
        else if (str[idx] === ')') {
            close += 1;
        }
        if (open < close) return false;
    }
    return true;
}

// 올바른 괄호 문자열로 변환하는 함수
// 문제에 주어진 과정을 통해 변환한다
function makeCorrectBracket(str) {
    // 1. 빈 문자열인지 확인
    if (str === '') return '';
    // 2. u, v로 분리
    let u = '';
    let v = '';
    // 이때 u는 "균형잡힌 괄호 문자열"이다
    let open = 0, close = 0;
    for (let idx = 0; idx < str.length; idx++) {
        if (str[idx] === '(') {
            open += 1;
        }
        else if (str[idx] === ')') {
            close += 1;
        }
        if (open === close) {
            u = str.slice(0, idx+1);
            v = str.slice(idx+1);
            break;
        }
    }
    let result = '';
    // u가 "올바른 괄호 문자열"인지 확인
    if (chkCorrectBracket(u)) {
        // 3. 문자열 u가 "올바른 괄호 문자열" 이라면
        result = u + makeCorrectBracket(v);
    } else {
        // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면
        result = '(' + makeCorrectBracket(v) + ')'; // 4-1 ~ 4-3
        result += u.slice(1, u.length-1).split('').map(ch => {
            if (ch === '(') return ')';
            if (ch === ')') return '(';
        }).join(''); // 4-4 ~ 4-5
    }
    return result;
}