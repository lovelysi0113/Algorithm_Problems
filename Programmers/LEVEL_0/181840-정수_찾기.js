/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181840
 *
 * COMMENT:
 * 배열을 순회하면서 주어진 숫자 n이 있는지 확인한다
 **/

function solution(num_list, n) {
	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] === n) {
			return 1;
		}
	}

	return 0;
}
