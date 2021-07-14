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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(1)

function solution(X, Y, D) {
	// 개구리가 현재 위치 X에서 Y보다 멀리 가려고 함
	// 개구리는 항상 D만큼 점프 가능
	// 점프 횟수의 최솟값 구하기

	// X와 Y 사이 거리 구하기
	let distance = Y - X;

	// 점프 횟수 최솟값 구하기
	return Math.ceil(distance / D);
}
