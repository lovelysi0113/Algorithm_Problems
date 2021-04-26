/**
* ABOUT
*
* DATE: 2021-04-26
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/4673
*
* COMMENT:
* n과 n의 각 자리수를 더하는 함수 d()를 구현한 다음
* 1~10000까지의 수를 d(n)으로 계산해보며 나온 결과값들을 저장한다
* 결과값들 중 나오지 않은 수가 셀프 넘버이므로 그것들을 출력하면 된다
**/

const d = (n) => {
    let answer = n;
    while (n > 0) {
        answer += n % 10;
        n = parseInt(n / 10);
    }
    return answer;
}

let nums = Array(10001).fill(false);
nums[0] = true;
for (let num = 1; num <= 10000; num++) {
    nums[d(num)] = true;
}

nums.forEach((el, idx) => {
    if (!el) {
        console.log(idx);
    }
});