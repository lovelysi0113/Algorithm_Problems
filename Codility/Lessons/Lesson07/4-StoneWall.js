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
