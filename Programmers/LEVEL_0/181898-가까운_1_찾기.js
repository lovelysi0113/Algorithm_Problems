/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181898
 *
 * COMMENT:
 * 인덱스 idx부터 시작해서 1이 나오는 인덱스를 찾는다
 **/

function solution(arr, idx) {
	for (let i = idx; i < arr.length; i++) {
		if (arr[i] === 1) return i;
	}

	return -1;
}
