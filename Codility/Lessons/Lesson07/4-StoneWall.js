/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
 *
 * COMMENT:
 * stack의 최상단과 현재 높이를 비교하여 최상단이 더 크면 stack에서 빼주고(pop) 블록 1개를 추가해준다
 * 현재 높이가 더 크면 stack에 넣어준다(push)
 * 모든 작업이 끝난 후, stack에 남은 높이만큼 블록을 추가해준다
 **/

function solution(H) {
	// Cover "Manhattan skyline" using the minimum number of rectangles
	// 높이가 제각각인 벽을 직사각형 블록을 사용하여 만들려고 한다
	// 이때 나올 수 있는 직사각형 블록의 최소 갯수 구하기

	let blocks = 0;
	let stack = [];

	H.forEach(h => {
		while (stack.length > 0 && stack[stack.length - 1] > h) {
			stack.pop();
			blocks += 1;
		}
		if (stack.length === 0 || stack[stack.length - 1] < h) {
			stack.push(h);
		}
	});

	return blocks + stack.length;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(H) {
	// 벽을 만들건데 벽의 높이는 배열 H를 따름
	// 직사각형 블록만 사용하여 벽을 만들 수 있다
	// 벽 만들때 사용하는 블록의 최소 갯수 구하기

	// N = 1이면 답은 무조건 1이다
	let N = H.length;
	if (N === 1) return 1;

	// 블록을 쌓기 전 보류할 높이를 저장
	let stack = [];

	let blocks = 0; // 벽 만들 때 필요한 블록 갯수

	// 높이 하나씩 체크하며 블록 쌓기
	for (let idx = 0; idx < N; idx++) {
		let h = H[idx]; // 현재 높이
		// 현재 높이보다 높은 경우 블록 하나 쌓을 수 있음
		while (stack.length > 0 && stack[stack.length - 1] > h) {
			stack.pop();
			blocks += 1;
		}
		// 현재 높이가 stack에 있는 것보다 클 경우 stack에 저장
		if (stack.length === 0 || stack[stack.length - 1] < h) {
			stack.push(h);
		}
	}

	// 필요한 블록 갯수 구하기 = 지금까지 사용한 블록 수 + 남은 높이를 만들 블록 갯수
	return blocks + stack.length;
}
