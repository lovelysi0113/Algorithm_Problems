/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120833
 *
 * COMMENT:
 * 배열 인덱스를 num1 ~ num2까지 순회하면서 해당 요소들을 answer 배열에 담아준다
 **/

function solution(numbers, num1, num2) {
	let answer = [];

	let idx = num1;
	while (idx <= num2) {
		answer.push(numbers[idx]);
		idx++;
	}

	return answer;
}
