/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120888
 *
 * COMMENT:
 * my_string의 글자를 하나씩 순회하면서 처음 나오는 글자는 따로 기록해주며
 * 중복된 문자를 제거해준다
 **/

function solution(my_string) {
	let checkStr = {};

	let answer = '';
	my_string.split('').forEach(str => {
		if (checkStr[str] === undefined) {
			checkStr[str] = str;
			answer += str;
		}
	});

	return answer;
}
