/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120841
 *
 * COMMENT:
 * x, y가 각각 양수/음수인지 파악하여 점이 어느 사분면에 속해있는지 확인한다
 **/

function solution(dot) {
	let [x, y] = dot;

	// 제1사분면: x > 0, y > 0
	if (x > 0 && y > 0) {
		return 1;
	}

	// 제2사분면: x < 0, y > 0
	if (x < 0 && y > 0) {
		return 2;
	}

	// 제3사분면: x < 0, y < 0
	if (x < 0 && y < 0) {
		return 3;
	}

	// 제4사분면: x > 0, y < 0
	if (x > 0 && y < 0) {
		return 4;
	}
}
