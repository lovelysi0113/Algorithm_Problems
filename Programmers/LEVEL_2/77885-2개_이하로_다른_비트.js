/**
* ABOUT
*
* DATE: 2021-05-14
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/77885
*
* COMMENT:
* 양의 정수 x를 2진법 수로 변환한 후 우선 뒤 2자리를 확인한다
* '00', '01', '10' 으로 끝나는 x는 
* x+1이 x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수가 된다
* '11' 으로 끝나는 x는 다른 방식으로 찾아야 한다
* 예로 들어 x가 '1011'이면 f(x)는 '1101'이다
* 즉, 뒤에서 가장 먼저 등장하는 '01'을 '10'으로 변경하면 답을 구할 수 있다
**/

function solution(numbers) {
    let answer = [];
    numbers.forEach(num => {
        let bin = num.toString(2);
        // 뒤의 자리를 봄
        // 00 -> 01
        // 01 -> 10
        // 10 -> 11 
        // 11 -> 다른 방식으로 진행
        if (bin.slice(-2) === '11') {
            if (!bin.includes('0')) {
                bin = '10' + bin.slice(1);
            } else {
                for (let idx = bin.length-1; idx >= 0; idx--) {
                    if (bin[idx] === '0') {
                        bin = bin.slice(0, idx) + '10' + bin.slice(idx+2);
                        break;
                    }
                }
            }
            answer.push(parseInt(bin, 2));
        } else {
            answer.push(num+1);
        }
    });
    return answer;
}