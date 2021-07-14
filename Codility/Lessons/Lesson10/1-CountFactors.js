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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(sqrt(N))

function solution(N) {
	// N의 약수의 개수 구하기

	let factor = 0;

	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			// num은 N의 약수이다
			factor += 1;
			if (num * num !== N) {
				// num의 제곱이 N이 아니라면
				// N / num도 N의 약수이다
				factor += 1;
			}
		}
	}

	return factor;
}
