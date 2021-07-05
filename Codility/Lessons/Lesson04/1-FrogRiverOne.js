/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 *
 * COMMENT:
 * 배열 A를 처음부터 검사하며 나뭇잎이 어디에 떨어지는지 확인한다
 * 1~X 사이에 나뭇잎이 모두 떨어졌을 때의 시간을 구하면 된다
 **/

function solution(X, A) {
	// Find the earliest time when a frog can jump to the other side of a river
	// 개구리가 1에서 X+1 위치로 이동하려고 한다
	// 1 ~X 사이에 나뭇잎이 다 떨어져야 이동 가능
	// 갈 수 있는 가장 최소 시간을 구하기
	// A[K]: K 시간에 떨어지는 나뭇잎의 위치

	let leaves = Array(X + 1).fill(false);
	let total = 0;
	for (let idx = 0; idx < A.length; idx++) {
		let now = A[idx];
		// 해당 위치에 처음으로 나뭇잎이 떨어짐
		if (!leaves[now]) {
			leaves[now] = true;
			total += 1;
		}
		// 1~X 사이에 나뭇잎이 모두 떨어짐
		if (total === X) {
			return idx;
		}
	}
	return -1;
}
