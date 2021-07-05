/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
 *
 * COMMENT:
 * 배열 A를 정렬한 후, 수를 하나씩 비교하여 빠진 양수가 없는지 확인한다
 **/

function solution(A) {
	// Find the smallest positive integer that does not occur in a given sequence
	// 배열 A에 없는 가장 작은 양수 구하기

	A.sort((a, b) => a - b);

	if (A[A.length - 1] < 1) {
		return 1;
	}

	let answer = 1;
	for (let idx = 0; idx < A.length; idx++) {
		if (answer === A[idx]) {
			answer += 1;
		} else if (answer < A[idx]) {
			return answer;
		}
	}

	return answer;
}
