/**
 * ABOUT
 *
 * DATE: 2021-06-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12985
 *
 * COMMENT:
 * a와 b의 다음 라운드 번호를 구하기 위해 2로 나눈 몫을 구한다
 * 이 몫(다음 라운드의 번호)이 서로 같아질 때까지 반복한다
 **/

function solution(n, a, b) {
	let round = 0;

	while (a !== b) {
		a = parseInt((a + 1) / 2);
		b = parseInt((b + 1) / 2);
		round += 1;
	}

	return round;
}
