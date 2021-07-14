/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
 *
 * COMMENT:
 * 배열 A를 오름차순으로 정렬한 후 음수*음수*양수와 양수*양수*양수 값 중 큰 값을 찾는다
 **/

function solution(A) {
	// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R)
	// 배열 A에서 세 요소를 뽑아 곱한 값 중에서 최댓값 구하기

	A.sort((a, b) => a - b);

	// 세 개 곱한 것 중 나올 수 있는 경우의 수
	const len = A.length;
	// 1. 음수 * 음수 * 양수
	let ans1 = A[0] * A[1] * A[len - 1];
	// 2. 양수 * 양수 * 양수
	let ans2 = A[len - 1] * A[len - 2] * A[len - 3];

	return Math.max(ans1, ans2);
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N * log(N))

function solution(A) {
	// 배열 A에서 세개의 요소를 골라 곱한 값의 최댓값 구하기

	// N = 3이면 답은 모든 요소의 곱이다
	let N = A.length;
	if (N === 3) return A[0] * A[1] * A[2];

	// A를 오름차순으로 정렬한다
	A.sort((a, b) => a - b);

	// 최댓값이 나올 수 있는 경우의 수
	// 1. 음수 * 음수 * 양수
	let ans1 = A[0] * A[1] * A[N - 1];
	// 2. 양수 * 양수 * 양수
	let ans2 = A[N - 1] * A[N - 2] * A[N - 3];

	// 둘 중 최댓값을 찾는다
	return Math.max(ans1, ans2);
}
