/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181859
 *
 * COMMENT:
 * while문으로 i 값이 arr.length와 같아질 때까지 반복한다
 **/

function solution(arr) {
	const stk = [];

	let i = 0;
	while (i < arr.length) {
		const stkLen = stk.length;
		const now = arr[i];
		if (stkLen === 0) {
			stk.push(now);
			i++;
		} else {
			const last = stk[stkLen - 1];
			if (last === now) {
				stk.pop();
				i++;
			} else {
				stk.push(now);
				i++;
			}
		}
	}

	return stk.length === 0 ? [-1] : stk;
}
