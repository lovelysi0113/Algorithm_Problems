/**
 * ABOUT
 *
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/8-leader/dominator/
 *
 * COMMENT:
 * 요소 값, 요소의 인덱스의 집합을 key, value로 가지는 객체를 만들어서
 * 배열 A에서 절반 이상 차지하는 요소가 있는지 확인한다
 **/

function solution(A) {
	// Find an index of an array such that its value occurs at more than half of indices in the array
	// dominator: 배열 A에서 절반 이상 있는 요소
	// dominator 있으면 해당 요소 위치 중 아무거나 반환, 없으면 -1 반환

	let elements = {};
	let maxCnt = 0;
	let maxEle = 0;
	const len = A.length;

	for (let idx = 0; idx < len; idx++) {
		let num = A[idx];
		if (elements[num] === undefined) {
			elements[num] = [];
		}
		elements[num].push(idx);

		if (maxCnt < elements[num].length) {
			maxCnt = elements[num].length;
			maxEle = num;
		}

		if (maxCnt > len / 2) {
			return elements[maxEle][0];
		}
	}

	return -1;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/8-leader/dominator/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N*log(N)) or O(N)

function solution(A) {
	// dominator: 배열 A에서 절반 이상 차지하는 요소의 값
	// dominator의 인덱스 중 하나 리턴, 없으면 -1 리턴

	let N = A.length;
	// N = 0이면 dominator 없음 -> -1 리턴
	if (N === 0) return -1;
	// N = 1이면 dominator는 무조건 A[0]이다
	if (N === 1) return 0;

	// elements: dominator 후보들을 저장
	let elements = {};
	let dominator = 0; // dominator
	let maxCnt = 0; // dominator의 갯수

	// 처음부터 차례대로 검사하며 dominator 찾기
	for (let idx = 0; idx < N; idx++) {
		let value = A[idx];
		if (elements[value] === undefined) {
			elements[value] = [];
		}
		elements[value].push(idx);
		if (elements[value].length > maxCnt) {
			maxCnt = elements[value].length;
			dominator = value;
		}
	}

	// 현재 구한 dominator가 배열 A의 절반보다 더 많이 차지하는지(more than half) 확인
	if (maxCnt > N / 2) return elements[dominator][0];
	else return -1;
}
