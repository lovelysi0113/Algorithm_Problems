/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120825
 *
 * COMMENT:
 * my_string에 있는 모든 문자를 n번씩 answer에 추가해준다
 **/

function solution(my_string, n) {
	let answer = '';

	my_string.split('').forEach(str => {
		let cnt = 0;
		while (cnt < n) {
			answer += str;
			cnt++;
		}
	});

	return answer;
}
