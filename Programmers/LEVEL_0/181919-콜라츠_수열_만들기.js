/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181919
 *
 * COMMENT:
 * n이 1이 될 때까지 n이 짝수이면 n을 2로 나누고, n이 홀수이면 n에 3을 곱하고 1을 더한 값을 n으로 대입하는 과정을 반복한다
 **/

function solution(n) {
	const answer = [n];

	while (n > 1) {
		if (n % 2 === 0) {
			n /= 2;
			answer.push(n);
		} else {
			n = 3 * n + 1;
			answer.push(n);
		}
	}

	return answer;
}
