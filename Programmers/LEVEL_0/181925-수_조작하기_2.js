/**
 * ABOUT
 *
 * DATE: 2025-05-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181925
 *
 * COMMENT:
 * 앞 뒤 수의 차로 어느 방향으로 이동했는지 찾아낸다
 **/

function solution(numLog) {
	let answer = '';

	numLog.slice(1).reduce((pre, num) => {
		const check = num - pre;
		switch (check) {
			case 1:
				answer += 'w';
				break;
			case -1:
				answer += 's';
				break;
			case 10:
				answer += 'd';
				break;
			case -10:
				answer += 'a';
				break;
		}

		return num;
	}, numLog[0]);

	return answer;
}
