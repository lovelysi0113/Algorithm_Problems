/**
* ABOUT
*
* DATE: 2021-04-11
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/17682
*
* COMMENT:
* dartResult을 점수, 보너스, 옵션으로 나눈 후, 문제에 나온대로 점수를 계산하면 된다
**/

function solution(dartResult) {
    let score = [0, 0, 0, 0];
    let stage = 0;
    
    let chkIdx = 0;
    while (chkIdx < dartResult.length) {
        let now = dartResult[chkIdx];
        // 점수
        if ('0123456789'.includes(now)) {
            if (now === '1') {
                if (dartResult[chkIdx+1] === '0') {
                    now += dartResult[chkIdx+1];
                    chkIdx += 1;
                }
            }
            stage++;
            score[stage] = Number(now);
        }
        // 보너스
        else if ('SDT'.includes(now)) {
            if (now === 'D') {
                score[stage] = score[stage] * score[stage];
            }
            else if (now === 'T') {
                score[stage] = score[stage] * score[stage] * score[stage];
            }
        }
        // 옵션
        else if ('*#'.includes(now)) {
            if (now === '*') {
                score[stage] *= 2;
                score[stage-1] *= 2;
            }
            else if (now === '#') {
                score[stage] *= -1;
            }
        }
        chkIdx++;
        
    }
    
    return score.reduce((sum, num) => sum + num, 0);
}