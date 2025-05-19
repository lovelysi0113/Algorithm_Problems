/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181918
 *
 * COMMENT:
 * 문제에서 주어진 조건에 따라 stk 배열에 push와 pop을 반복한다
 **/

function solution(arr) {
	const stk = [];

	const arrLen = arr.length;
	let i = 0;

	while (i < arrLen) {
		const stkLen = stk.length;

		if (stkLen === 0) {
			stk.push(arr[i]);
			i++;
		} else {
			const last = stk[stkLen - 1];

			if (last < arr[i]) {
				stk.push(arr[i]);
				i++;
			} else {
				stk.pop();
			}
		}
	}

	return stk;
}
