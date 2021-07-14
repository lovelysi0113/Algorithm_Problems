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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(X, A) {
	// 위치 0에 있는 개구리가 X+1 위치로 이동하려고 함
	// 그런데 1~X에 나뭇잎이 모두 있어야 이동할 수 있음
	// 배열 A: A[K] = 시간 K일 때, 잎이 떨어지는 위치
	// 이동할 수 있는 가장 빠른 시간 구하기
	// 만약 건널 수 없으면 -1

	// 건너지 못하는 경우: N이 X보다 작은 경우 -> 1~X에 모두 깔지 못함
	let N = A.length;
	if (N < X) return -1;

	// falled[pos]: pos에 나뭇잎이 떨어져 있는가 true / false
	const falled = Array(X + 1).fill(false);
	let leaves = 0; // 현재 강에 떨어져있는 나뭇잎 갯수

	// 강에 나뭇잎을 하나씩 떨어뜨리면서 1~X를 모두 덮는 시간 찾기
	for (let time = 0; time < N; time++) {
		let now = A[time];
		if (!falled[now]) {
			// now 위치에 나뭇잎 깔기
			falled[now] = true;
			leaves += 1;
		}
		// 지금까지 깔린 나뭇잎 갯수가 X개 -> 1~X에 모든 나뭇잎이 깔림
		if (leaves === X) return time;
	}

	// leaves 갯수로 1~X에 나뭇잎이 모두 깔렸는지 확인
	if (leaves === X) return N - 1;
	else return -1;
}
