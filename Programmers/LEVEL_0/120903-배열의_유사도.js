/**
 * ABOUT
 *
 * DATE: 2023-01-12
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120903
 *
 * COMMENT:
 * s1 배열을 순회하면서 각 요소가 s2에 들어있는지 includes() 함수로 확인한다
 **/

function solution(s1, s2) {
	let answer = 0;

	s1.forEach(str => {
		if (s2.includes(str)) {
			answer += 1;
		}
	});

	return answer;
}
