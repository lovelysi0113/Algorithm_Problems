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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/8-leader/equi_leader/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// leader: more than half인 요소의 값
	// A[0]~A[S]에서의 leader와 A[S+1]~A[N-1]에서의 leader가 같은 경우가 나오는 S의 갯수 구하기

	// N = 1인 경우 항상 0이다
	let N = A.length;
	if (N === 1) return 0;

	// front[idx]: A[0]~A[idx]에서의 leader
	let front = [];
	let frontElements = {}; // 값 별로 요소의 갯수 저장
	let maxValue = 0; // 갯수가 가장 많은 요소의 값
	let maxCnt = 0; // maxValue의 갯수
	for (let idx = 0; idx < N - 1; idx++) {
		let value = A[idx];
		if (frontElements[value] === undefined) {
			frontElements[value] = 0;
		}
		frontElements[value] += 1;
		if (maxCnt < frontElements[value]) {
			maxCnt = frontElements[value];
			maxValue = value;
		}
		if (maxCnt > (idx + 1) / 2) front.push(maxValue);
		else front.push(Infinity);
	}

	// back[idx]: A[idx+1]~A[N-1]에서의 leader
	let back = [];
	let backElements = {}; // 값 별로 요소의 갯수 저장
	maxValue = 0; // 갯수가 가장 많은 요소의 값
	maxCnt = 0; // maxValue의 갯수
	for (let idx = N - 1; idx > 0; idx--) {
		let value = A[idx];
		if (backElements[value] === undefined) {
			backElements[value] = 0;
		}
		backElements[value] += 1;
		if (maxCnt < backElements[value]) {
			maxCnt = backElements[value];
			maxValue = value;
		}
		if (maxCnt > (N - idx) / 2) back.push(maxValue);
		else back.push(Infinity);
	}
	back.reverse();

	// front[S]와 back[S] 비교
	let answer = 0;
	for (let S = 0; S < N - 1; S++) {
		if (front[S] !== Infinity && front[S] === back[S]) {
			answer += 1;
		}
	}

	return answer;
}
