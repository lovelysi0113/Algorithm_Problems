/**
* ABOUT
*
* DATE: 2021-04-02
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/42862
*
* COMMENT:
* [ 탐욕법(Greedy) ]
* lost, reserve로 현재 체육복 상황을 파악하고 체육복을 빌려줄 수 있는지 한명씩 확인한다
**/

function solution(n, lost, reserve) {
    // 현재 체육복을 가지고 있는 상황 체크하기
    let haveSuit = [0].concat(new Array(n).fill(1));
    lost.forEach(num => haveSuit[num] -= 1);
    reserve.forEach(num => haveSuit[num] += 1);
    
    // 체육복을 빌려줄 수 있는지 확인
    for (let idx = 1; idx < haveSuit.length; idx++) {
        if (haveSuit[idx] === 0) {
            if (haveSuit[idx-1] > 1) {
                haveSuit[idx-1] -= 1;
                haveSuit[idx] += 1;
            }
            else if (haveSuit[idx+1] > 1) {
                haveSuit[idx+1] -= 1;
                haveSuit[idx] += 1;
            }
        }
    }
    
    // 체육수업을 들을 수 있는 학생 수
    return haveSuit.reduce((sum, person) => {
        if (person !== 0) return sum + 1;
        else return sum;
    }, 0);
}