/**
* ABOUT
*
* DATE: 2021-04-06
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12977
*
* COMMENT:
* 세 수를 선택해 그 합이 소수인지 확인했다
* 이때, for문을 3번 돌려서 세 수를 선택하는 방법을 사용했다
**/

function solution(nums) {
    let sumNum = [];
    let total = nums.length;
    for (let one = 0; one < total-2; one++) {
        for (let two = one; two < total-1; two++) {
            for (let three = two; three < total; three++) {
                if (one !== two && two !== three && one !== three) {
                    let sum = nums[one] + nums[two] + nums[three];
                    if (isPrime(sum)) {
                        sumNum.push(sum)
                    }
                }
            }
        }
    }
    return sumNum.length;
}

const isPrime = (num) => {
    for (let chk = 2; chk <= parseInt(Math.sqrt(num)); chk++) {
        if (num % chk === 0) {
            return false;
        }
    }
    return true;
}