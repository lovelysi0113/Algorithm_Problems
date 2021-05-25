/**
* ABOUT
*
* DATE: 2021-05-25
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/77484
*
* COMMENT:
* 당첨 가능한 최고 순위는 0이 모두 맞는 숫자인 경우, 최저 순위는 0이 모두 틀린 숫자인 경우이다
* 0이 아닌 숫자 중 당첨이 확실한 숫자들의 갯수와 0의 갯수를 활용하여 최고 순위, 최저 순위를 구할 수 있다
**/

function solution(lottos, win_nums) {
    let zero = 0;
    let correct = 0;
    lottos.forEach(num => {
        if (num === 0) {
            zero += 1;
        } else if (win_nums.includes(num)) {
            correct += 1;
        }
    });
    
    let high = 7 - (correct + zero);
    let low = 7 - (correct);
    high = high >= 6 ? 6 : high;
    low = low >= 6 ? 6 : low;
    return [high, low];
}