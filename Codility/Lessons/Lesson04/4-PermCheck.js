/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 *
 * COMMENT:
 * 배열에 1~N까지 숫자가 모두 있는지 확인한다
 **/

function solution(A) {
	// Check whether array A is a permutation
	// permutation: 1~N까지 수가 모두 존재하는 배열

	A.sort((a, b) => a - b);

	if (A[0] !== 1) {
		return 0;
	}

	let chk = A[0] + 1;
	for (let idx = 1; idx < A.length; idx++) {
		if (chk === A[idx]) {
			chk += 1;
		} else {
			return 0;
		}
	}
	return 1;
}
