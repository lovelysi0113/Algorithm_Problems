/**
* ABOUT
*
* DATE: 2021-04-16
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/76502
*
* COMMENT:
* 우선 여는 괄호, 닫힌 괄호의 수를 세서 갯수가 맞는지 확인한다
* 만약 다르면 회전을 몇번이든 해도 올바른 괄호 문자열이 나오지 않기 때문이다
* 갯수가 맞다면 회전을 계속 해보며 그때의 문자열이 올바른 괄호 문자열인지 확인한다
* 회전을 하며 나왔던 올바른 괄호 문자열의 총 갯수를 리턴한다
**/

function solution(s) {
    // 0: (, 1: ), 2: [, 3: ], 4: {, 5: }
    let brackets = [0, 0, 0, 0, 0, 0];
    for (let idx = 0; idx < s.length; idx++) {
        let pos = '()[]{}'.indexOf(s[idx]);
        brackets[pos] += 1;
    }
    const isPair = () => {
        return brackets[0] === brackets[1] && brackets[2] === brackets[3] && brackets[4] === brackets[5];
    };
    const isNotCorrect = () => {
        return brackets[0] < brackets[1] || brackets[2] < brackets[3] || brackets[4] < brackets[5];
    };
    if (!isPair() || isNotCorrect()) {
        return 0;
    }
    let answer = 0;
    let rotation = 0;
    while (rotation < s.length) {
        let open = [];
        let brackets = [0, 0, 0, 0, 0, 0];
        let isRight = true;
        for (let idx = 0; idx < s.length; idx++) {
            let pos = '()[]{}'.indexOf(s[idx]);
            brackets[pos] += 1;
            if ('([{'.includes(s[idx])) {
                open.push(s[idx]);
            } else {
                if (open.length === 0) {
                    isRight = false;
                    break;
                }
                let last = open.pop();
                if ((s[idx] === ')' && last !== '(') || (s[idx] === ']' && last !== '[') || (s[idx] === '}' && last !== '{')) {
                    isRight = false;
                    break;
                }
            }
        }
        if (isRight) {
            answer += 1;
        }
        rotation++;
        s = s.slice(1) + s[0];
    }
    return answer;
}