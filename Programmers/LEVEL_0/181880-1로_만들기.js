/**
 * ABOUT
 *
 * DATE: 2025-05-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181880
 *
 * COMMENT:
 * 각 원소를 1로 만들기 위해서 필요한 나누기 연산 횟수를 구한 후 모두 더해준다
 **/

function solution(num_list) {
	let answer = 0;

	num_list.forEach(num => {
		let count = 0;

		while (num > 1) {
			count++;
			if (num % 2 === 0) num /= 2;
			else num = (num - 1) / 2;
		}

		answer += count;
	});

	return answer;
}
