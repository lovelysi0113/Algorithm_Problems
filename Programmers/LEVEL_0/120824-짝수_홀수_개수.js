/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120824
 *
 * COMMENT:
 * 배열을 순회하면서 짝수, 홀수 개수를 세어준다
 **/

function solution(num_list) {
	// answer = [짝수의 개수, 홀수의 개수]
	let answer = [0, 0];

	num_list.forEach(el => {
		if (el % 2 === 0) {
			answer[0] += 1;
		} else {
			answer[1] += 1;
		}
	});

	return answer;
}
