/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120831
 *
 * COMMENT:
 * for문을 돌면서 n 이하의 모든 짝수들의 합을 구한다
 **/

function solution(n) {
	let answer = 0;

	for (let num = 0; num <= n; num += 2) {
		answer += num;
	}

	return answer;
}
