/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181894
 *
 * COMMENT:
 * 2의 첫번째 위치와 마지막 위치를 찾아서 그 사이를 잘라준다
 **/

function solution(arr) {
	const firstIdx = arr.indexOf(2);
	const lastIdx = arr.lastIndexOf(2);

	if (lastIdx === -1) {
		return [-1];
	}

	return arr.slice(firstIdx, lastIdx + 1);
}
