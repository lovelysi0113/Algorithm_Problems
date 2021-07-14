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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N) or O(N * log(N))

function solution(A) {
	// 배열 A: N개의 정수
	// permutation: 1~N의 수가 1번씩 있는 경우
	// 배열 A가 permutation이면 1, 아니면 0 리턴

	// A 오름차순 정렬
	A.sort((a, b) => a - b);

	// 예외처리: A의 마지막 수가 N이 아니면 A는 무조건 permutation이 아님
	let N = A.length;
	if (A[N - 1] !== N) return 0;

	// 배열 A에 1~N까지 모두 있는지 확인해보기
	for (let idx = 0; idx < N; idx++) {
		if (A[idx] !== idx + 1) return 0;
	}

	// for문을 모두 돌았다 -> 배열 A에 1~N까지의 수가 모두 있음
	return 1;
}
