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
