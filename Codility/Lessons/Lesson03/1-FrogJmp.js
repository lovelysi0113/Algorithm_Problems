/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 *
 * COMMENT:
 * 개구리는 항상 D만큼 점프할 수 있다
 * 개구리가 X위치에서 Y위치로 가는데 걸리는 횟수는 (Y - X)를 D로 나누면 구할 수 있다
 **/

function solution(X, Y, D) {
	// 개구리가 X 위치에서 Y 위치로 가려고 하는데 항상 D만큼 점프할 수 있다
	// 갈 수 있는 최소 횟수 구하기

	let differ = Y - X;
	return Math.ceil(differ / D);
}
