/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/60057
*
* COMMENT:
* 1~s.length 갯수만큼 문자열을 압축해보고 그 중 가장 짧은 길이의 압축된 문자열을 구한다
**/

function solution(s) {
    const MAX = s.length + 1;
    let answer = 10000;
    
    // 1 ~ MAX 갯수만큼 문자열을 압축해보기
    for(let rptNum = 1; rptNum < MAX; rptNum++) {
        let nowAnswer = '';
        let chkWord = '';
        let cntWord = 0;
        for (let idx = 0; idx < s.length+1; idx += rptNum) {
            // 압축 시작하기
            if (chkWord === '') {
                chkWord = s.slice(idx, idx+rptNum);
                cntWord = 1;
            }
            // 겹치는 문자열 있는지 확인
            else if (chkWord === s.slice(idx, idx+rptNum)) {
                cntWord += 1;
            }
            // 반복되지 않을 때
            else {
                if (cntWord === 1) {
                    nowAnswer += chkWord;
                } else {
                    nowAnswer += cntWord + chkWord;
                }
                // 문자열이 끝나지 않았으면 계속 진행하기
                if (idx !== s.length) {
                    chkWord = s.slice(idx, idx+rptNum);
                    cntWord = 1;
                }
            }
        }
        // 남은 자투리 문자열도 추가해주기
        let last = s.length % rptNum;
        if (last !== 0) nowAnswer += s.slice(-last);
        
        // 현재 압축한 문자열 길이가 최소길이인지 비교
        answer = Math.min(answer, nowAnswer.length);
    }
    
    return answer;
}