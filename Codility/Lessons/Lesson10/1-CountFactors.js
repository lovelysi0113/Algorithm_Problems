/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
 *
 * COMMENT:
 * 1~N의 제곱근까지 N으로 나누어지는 수가 몇개인지 확인한다
 **/

function solution(N) {
	// Count factors of given number n
	// N의 약수 갯수 세기

	let factors = 0;

	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			factors += 1;
			if (num * num !== N) {
				factors += 1;
			}
		}
	}

	return factors;
}
