/**
* ABOUT
*
* DATE: 2021-05-16
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2981
*
* COMMENT:
* 종이에 적은 수들의 집합을 arr이라고 했을 때(오름차순)
* 각 수를 M으로 나눈 나머지는 다음과 같다
* arr[0] % M = arr[0] - (arr[0]/M) * M
* arr[1] % M = arr[1] - (arr[1]/M) * M
* ...
* arr[n] % M = arr[n] - (arr[n]/M) * M
* 문제에서 각 수를 M으로 나눈 나머지가 모두 같아야 하므로 이를 토대로 정리해보면
* arr[1] - arr[0] = (arr[1]/M - arr[0]/M) * M
* arr[2] - arr[1] = (arr[2]/M - arr[1]/M) * M
* ...
* arr[n] - arr[n-1] = (arr[n]/M - arr[n-1]/M) * M
* 즉, arr에서 인접한 수의 차이값들이 M의 배수가 된다는 사실을 알 수 있다
* 따라서 차이값들의 최대공약수 M와 M의 모든 약수(1 제외)가 가능한 M이 된다
**/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(parseInt(line));
})
.on('close', function () {
    let total = input[0];
    let numList = input.slice(1);
    numList.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    
    // 인접한 수들의 차이값 구하기
    let differList = [];
    for (let idx = 1; idx < numList.length; idx++) {
        differList.push(numList[idx]-numList[idx-1]);
    }
    
    // 최대공약수 구하기
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    };
    
    // 차이값들의 최대공약수 구하기
    let M = differList[0];
    for (let idx = 1; idx < differList.length; idx++) {
        M = gcd(M, differList[idx]);
    }
    
    // 1을 제외한 M의 모든 약수 구하기
    let answer = [ M ];
    for (let num = 2; num <= Math.sqrt(M); num++) {
        if (M % num === 0) {
            answer.push(num);
            if (M / num !== num) {
                answer.push(M / num);
            }
        }
    }
    
    // 오름차순 정렬로 출력
    answer.sort((a, b) => {
        if (a > b) return 1;
        else if (a === b) return 0;
        else return -1;
    });
    console.log(answer.join(' '));

    process.exit();
});