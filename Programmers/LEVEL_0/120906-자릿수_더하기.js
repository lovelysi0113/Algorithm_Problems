/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120906
 *
 * COMMENT:
 * 입력받은 수를 10으로 계속 나누면서 각 자리수를 구할 수 있다
 **/

function solution(n) {
	let answer = 0;

	while (n > 0) {
		answer += n % 10;
		n = Math.floor(n / 10);
	}

	return answer;
}
