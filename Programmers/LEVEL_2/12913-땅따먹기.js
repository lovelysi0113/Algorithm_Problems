/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12913
*
* COMMENT:
* memorization + 완전탐색으로 현재 라인에서 얻을 수 있는 최대 점수를 저장한다
**/

function solution(land) {
    for (let idx = 1; idx < land.length; idx++) {
        let preLine = land[idx-1];
        land[idx][0] += Math.max(preLine[1], preLine[2], preLine[3]);
        land[idx][1] += Math.max(preLine[0], preLine[2], preLine[3]);
        land[idx][2] += Math.max(preLine[0], preLine[1], preLine[3]);
        land[idx][3] += Math.max(preLine[0], preLine[1], preLine[2]);
    }
    return land[land.length-1].reduce((max, num) => Math.max(max, num));
    
    /* 시간 초과가 난다ㅠㅠ
    let score = [ land[0] ];
    
    land.forEach((line, idx) => {
        if (idx > 0) {
            let result = line.map((chk, pos) => {
                let getMax = score[idx-1].reduce((max, num, i) => {
                    if (i === pos) {
                        return max;
                    } else {
                        return Math.max(max, num);
                    }
                });
                return chk + getMax;
            });
            score.push(result);  
        }
    });

    let len = score.length;
    return score[len-1].reduce((max, num) => Math.max(max, num));
    */
}