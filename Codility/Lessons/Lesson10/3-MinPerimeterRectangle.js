/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
 *
 * COMMENT:
 * N의 약수를 구해서 그 중에서 가장 작은 perimeter를 구한다
 **/

function solution(N) {
	// Find the minimal perimeter of any rectangle whose area equals N
	// A, B: A * B = N이 되는 수
	// perimeter: 2 * (A + B)
	// perimeter의 최솟값 구하기

	let answer = N * 4;

	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			let a = num;
			let b = N / num;
			answer = Math.min(answer, (a + b) * 2);
		}
	}

	return answer;
}
