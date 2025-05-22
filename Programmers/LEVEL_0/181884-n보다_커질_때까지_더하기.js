/**
 * ABOUT
 *
 * DATE: 2025-05-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181884
 *
 * COMMENT:
 * 배열 앞에서부터 차례대로 더할 때마다 n보다 큰지 확인한다
 **/

function solution(numbers, n) {
	let answer = 0;

	for (let i = 0; i < numbers.length; i++) {
		answer += numbers[i];
		if (n < answer) return answer;
	}

	return answer;
}
