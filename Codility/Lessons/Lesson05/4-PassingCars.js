/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 *
 * COMMENT:
 * 배열의 끝에서 부터 차례대로 0이 나올때까지 만나는 1의 갯수를 세어준다
 **/

function solution(A) {
	// Count the number of passing cars on the road
	// A[P] = 0, A[Q] = 1이 되는 (P, Q)의 갯수 구하기

	let answer = 0;
	let passed = 0;
	for (let idx = A.length - 1; idx >= 0; idx--) {
		if (A[idx] === 1) {
			passed += 1;
		} else {
			answer += passed;
		}
	}

	// 문제의 조건 놓치지 않기!
	if (answer > 1000000000) {
		return -1;
	} else {
		return answer;
	}
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// A[P] = 0, A[Q] = 1이 되는 (P, Q)의 갯수 구하기

	// N = 1인 경우 -> pair는 무조건 0이다
	let N = A.length;
	if (N === 1) return 0;

	let pair = 0;
	let canPass = 0; // 만날 수 있는 차의 갯수

	for (let idx = N - 1; idx >= 0; idx--) {
		if (A[idx] === 1) {
			canPass += 1;
		} else {
			pair += canPass;
		}
	}

	// pair 갯수가 일정 수를 넘으면 -1 리턴
	if (pair > 1000000000) return -1;
	else return pair;
}
