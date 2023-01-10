/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120813
 *
 * COMMENT:
 * for문을 사용하여 n 이하의 홀수를 배열에 오름차순으로 저장해준다
 **/

function solution(n) {
	let answer = [];

	for (let num = 1; num <= n; num += 2) {
		answer.push(num);
	}

	return answer;
}
