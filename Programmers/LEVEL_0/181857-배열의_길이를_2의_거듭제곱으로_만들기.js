/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181857
 *
 * COMMENT:
 * while문을 사용하여 가장 가까운 2의 거듭제곱을 찾는다
 **/

function solution(arr) {
	const arrLen = arr.length;
	let twoNum = 1;
	while (twoNum < arrLen) {
		twoNum *= 2;
	}

	return [...arr, ...new Array(twoNum - arrLen).fill(0)];
}
