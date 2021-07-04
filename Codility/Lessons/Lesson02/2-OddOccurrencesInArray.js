/**
 * ABOUT
 *
 * DATE: 2021-07-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 *
 * COMMENT:
 * 짝이 없는 요소를 찾아야 하므로 정렬한 배열에서 요소를 두개씩 묶어서 값을 비교한다
 * 만약 다르면 둘 중 짝이 없는 것을 찾아준다
 **/

function solution(A) {
	// 입력: 홀수로 이루어진 배열
	// 모든 요소들은 짝이 있는데, 그중 하나만 짝이 없음
	// 찍이 없는 요소를 찾기

	if (A.length === 1) {
		return A[0];
	}

	A.sort();

	for (let idx = 0; idx < A.length - 2; idx += 2) {
		if (A[idx] !== A[idx + 1]) {
			if (A[idx + 1] === A[idx + 2]) {
				return A[idx];
			} else {
				return A[idx + 1];
			}
		}
	}
	return A[A.length - 1];
}
