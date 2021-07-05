/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
 *
 * COMMENT:
 * 1~N+1까지의 합을 구한 후 A의 요소들의 합과 비교한다
 * 두 합의 차이가 바로 빠진 숫자이다
 **/

function solution(A) {
	// 배열의 요소는 1~N+1까지의 숫자로 이루어져 있는데 이 중 빠진 숫자가 있다
	// 빠진 숫자 찾기

	let N = A.length + 1;
	let total = (N * (N + 1)) / 2;
	A.forEach(num => (total -= num));
	return total;
}
