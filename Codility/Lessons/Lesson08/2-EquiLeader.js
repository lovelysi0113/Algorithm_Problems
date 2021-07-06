/**
 * ABOUT
 *
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/8-leader/equi_leader/
 *
 * COMMENT:
 * 앞에서부터 하나씩 요소를 추가한 부분배열에서 leader를 구하고
 * 뒤에서부터 하나씩 요소를 추가한 부분배열에서 leader를 구한다
 * 그리고 두 개를 비교하여 leader가 같으면 equi leader이다
 **/

function solution(A) {
	// Find the index S such that the leaders of the sequences
	// A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same
	// leader: 배열 A에 절반 이상 있는 요소
	// equi leader: A[S]를 기준으로 A[0]~A[S]와 A[S+1]~A[N-1] 양쪽에 같은 leader가 있는 S
	// equi leader가 몇 개 있는지 구하기

	const len = A.length - 1;

	let front = [];
	let frontEle = {};
	let leader = 0;
	let maxCnt = 0;
	for (let idx = 0; idx < len; idx++) {
		let num = A[idx];
		if (frontEle[num] === undefined) {
			frontEle[num] = 0;
		}
		frontEle[num] += 1;

		if (maxCnt < frontEle[num]) {
			maxCnt = frontEle[num];
			leader = num;
		}
		if (maxCnt > (idx + 1) / 2) {
			front.push(leader);
		} else {
			front.push(Infinity);
		}
	}

	let back = [];
	let backEle = {};
	leader = 0;
	maxCnt = 0;
	for (let idx = len; idx > 0; idx--) {
		let num = A[idx];
		if (backEle[num] === undefined) {
			backEle[num] = 0;
		}
		backEle[num] += 1;

		if (maxCnt < backEle[num]) {
			maxCnt = backEle[num];
			leader = num;
		}
		if (maxCnt > (len - idx + 1) / 2) {
			back.push(leader);
		} else {
			back.push(Infinity);
		}
	}

	let answer = 0;
	for (let idx = 0; idx < len; idx++) {
		if (front[idx] !== Infinity && front[idx] === back[len - idx - 1]) {
			answer += 1;
		}
	}
	return answer;
}
