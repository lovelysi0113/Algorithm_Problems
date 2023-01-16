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

// **************************************************************************************************** //

/**
 * ABOUT
 *
 * DATE: 2023-01-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120831
 *
 * COMMENT:
 * 짝수의 합을 구하는 공식을 사용한다
 * 짝수의 개수를 n이라고 할 때, 짝수의 합은 n ^ 2 + n으로 구할 수 있다
 **/

function solution(n) {
	const evenNum = Math.floor(n / 2);

	return evenNum * evenNum + evenNum;
}
