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
