/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12930
*
* COMMENT:
* 문자열 전체 기준이 아닌 단어를 기준으로 인덱스를 확인하여 대/소문자로 변환해야 한다
**/

function solution(s) {
    let answer = s.split('');
    
    let cntIdx = 0;
    answer = answer.map((ch, idx) => {
        // 글자인 경우
        if (ch !== ' ') {
            if ((idx-cntIdx) % 2 === 0) {
                return ch.toUpperCase();
            }
            else {
                return ch.toLowerCase();
            }
        }
        // 공백인 경우
        else {
            cntIdx = idx + 1;
            return ch;
        }
    });

    return answer.join('');
}