/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181896
 *
 * COMMENT:
 * 배열을 순회하면서 음수를 찾는다
 **/

function solution(num_list) {
	for (let i = 0; i < num_list.length; i++) {
		const num = num_list[i];
		if (num < 0) {
			return i;
		}
	}

	return -1;
}
