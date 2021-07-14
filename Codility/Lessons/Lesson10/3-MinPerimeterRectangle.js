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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(sqrt(N))

function solution(N) {
	// N = 사각형의 넓이 = A * B
	// perimeter = 사각형의 둘레 = 2 * (A + B)
	// perimeter의 최댓값 구하기

	// N의 약수를 구해서 perimeter 구해보기
	let perimeter = Infinity;
	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			let A = num;
			let B = N / num;
			perimeter = Math.min(perimeter, 2 * (A + B));
		}
	}

	return perimeter;
}
