/**
 * ABOUT
 *
 * DATE: 2025-05-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181901
 *
 * COMMENT:
 * for문을 사용하여 k부터 n까지 k씩 증가시키면서 배열에 추가한다
 **/

function solution(n, k) {
	const answer = [];

	for (let i = k; i <= n; i += k) {
		answer.push(i);
	}

	return answer;
}
