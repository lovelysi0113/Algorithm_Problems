/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 *
 * COMMENT:
 * 배열을 두 부분(왼쪽, 오른쪽)으로 나누고 각 부분의 합의 차이값을 구해야 한다
 * 우선 배열의 모든 요소가 오른쪽에 있다고 가정한 후
 * 하나씩 왼쪽으로 옮기면서 두 부분의 합의 차이값을 구해본다
 **/

function solution(A) {
	// 배열을 인덱스 P를 기준으로 하여 두 부분으로 나누고 각 부분의 합을 구한다
	// 둘의 차이값중 가장 작은 값 찾기

	let right = 0;
	A.forEach(num => (right += num));

	let left = 0;
	let differ = Infinity;
	for (let idx = 0; idx < A.length - 1; idx++) {
		left += A[idx];
		right -= A[idx];
		differ = Math.min(differ, Math.abs(left - right));
	}
	return differ;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// 배열 A: 빈배열이 아님, N개의 정수
	// 두 개의 파트로 나눈 후, 각 파트의 합을 구함
	// 두 개의 합의 차이의 절대값을 difference라고 함
	// difference의 최솟값 찾기

	// 예외처리: N이 2일 때 -> 두 요소의 차이의 절대값이 바로 답이 된다
	let N = A.length;
	if (N === 2) return Math.abs(A[1] - A[0]);

	// sumA 구하기
	// sumA[idx] = A[0] ~ A[idx]까지의 합
	const sumA = [A[0]];
	for (let idx = 1; idx < N; idx++) {
		sumA[idx] = sumA[idx - 1] + A[idx];
	}

	// P를 1부터 N-1까지 검사하며 그때의 difference 구하기
	// first 파트: A[0] ~ A[P-1]
	// second 파트: A[P] ~ A[N-1]
	let minDifference = Infinity;
	for (let P = 1; P < N; P++) {
		let first = sumA[P - 1];
		let second = sumA[N - 1] - first;
		minDifference = Math.min(minDifference, Math.abs(first - second));
	}

	// difference의 최솟값
	return minDifference;
}
