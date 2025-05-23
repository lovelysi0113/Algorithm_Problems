/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181881
 *
 * COMMENT:
 * 조건에 따라 배열의 원소를 갱신하다가 다른 값이 나오면 바로 다음 step으로 넘어가는 방식으로 항상 전체 배열을 검사하지 않도록 한다
 **/

function solution(arr) {
	let x = 0;

	while (true) {
		let changed = false;
		const next = new Array(arr.length);

		for (let i = 0; i < arr.length; i++) {
			const val = arr[i];

			if (val >= 50 && val % 2 === 0) {
				next[i] = val / 2;
			} else if (val < 50 && val % 2 === 1) {
				next[i] = val * 2 + 1;
			} else {
				next[i] = val;
			}

			if (next[i] !== val) {
				changed = true;
			}
		}

		if (!changed) break;

		arr = next;
		x++;
	}

	return x;
}
