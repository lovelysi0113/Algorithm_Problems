/**
 * ABOUT
 *
 * DATE: 2021-10-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/8
 *
 * COMMENT:
 * 0부터 9까지 numbers에 있는지 확인하고 없는 수는 더해준다
 **/

function solution(numbers) {
	let answer = 0;

	for (let chk = 0; chk <= 9; chk++) {
		if (!numbers.includes(chk)) {
			answer += chk;
		}
	}

	return answer;
}
