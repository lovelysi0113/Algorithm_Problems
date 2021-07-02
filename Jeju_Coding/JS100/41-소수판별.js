/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/41-994743b827054aadadbe471001b6531c
 *
 * COMMENT:
 * 에라토스테네스의 체를 사용하여 소수인지 확인할 수 있다
 **/

function solution(n) {
	if (n === 1) {
		console.log('NO');
		return;
	}
	let isPrime = true;
	for (let num = 2; num <= Math.sqrt(n); num++) {
		if (n % num === 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
