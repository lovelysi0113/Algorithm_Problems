/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181900
 *
 * COMMENT:
 * 풀이 설명
 * indices 배열을 정렬한 후, my_string을 split하여 각 문자에 대해 인덱스가 indices에 포함되어 있는지 확인한다
 **/

function solution(my_string, indices) {
	indices = indices.sort((a, b) => a - b);
	let idx = 0;

	let answer = '';

	my_string.split('').forEach((str, num) => {
		if (num === indices[idx]) {
			idx += 1;
		} else {
			answer += str;
		}
	});

	return answer;
}
