/**
* ABOUT
*
* DATE: 2021-04-10
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12921
*
* COMMENT:
* 1 ~ n 사이의 수를 각각 소수인지 검사한다
* num이 소수인지 확인할 때는 2~num의 제곱근 사이의 수에서 나누어 떨어지는 수가 있는지 체크한다
* 하지만 python과 달리 javascript로 제출했을 때 효율성 테스트인 모든 케이스에서 시간 초과가 나왔다
* 시간을 줄이기 위해 소수를 담는 배열을 만든 후 num이 소수로 나누어 떨어지는지 확인했다
* 이 경우, 소수인지 확인할 때 검사하는 수의 개수가 많이 줄어드므로 시간 초과를 방지할 수 있다
* 여기서 소수로 나누어 떨어지는 것을 확인할 때에도 모든 소수에 대해 검사하는 것이 아닌
* num의 제곱근보다 작은 소수들까지만 검사를 해서 시간을 더 줄이는 방법을 사용하였다
**/

function solution(n) {
    let prime = [2];
    const isPrime = (num) => {
        if (num === 1) {
            return false;
        }
        if (num === 2) {
            return true;
        }
        for (let idx = 0; idx < prime.length; idx++) {
            if (prime[idx] > parseInt(Math.sqrt(num)) + 1) {
                break;
            }
            if (num % prime[idx] === 0) {
                return false;
            }
        }
        prime.push(num);
        return true;
    };
    
    var answer = 0;
    for (let num = 1; num <= n; num++) {
        if (isPrime(num)) {
            answer += 1;
        }
    }
    return answer;
}