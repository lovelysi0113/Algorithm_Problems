/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181911
 *
 * COMMENT:
 * 문자열을 slice() 함수를 사용하여 s ~ e + 1까지 잘라낸다
 **/

function solution(my_strings, parts) {
	const answer = [];

	my_strings.forEach((string, idx) => {
		const [s, e] = parts[idx];
		answer.push(string.slice(s, e + 1));
	});

	return answer.join('');
}
