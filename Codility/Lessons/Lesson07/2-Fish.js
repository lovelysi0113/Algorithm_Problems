/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
 *
 * COMMENT:
 * 물고기가 1 방향으로 가면 stack[1]에 넣어주고(push)
 * 물고기가 0 방향으로 가면 stack[1]에서 한마리씩 꺼내(pop) 크기를 비교하였다
 **/

function solution(A, B) {
	// N voracious fish are moving along a river. Calculate how many fish are alive
	// 물고기가 마주치면 한 마리만 살아남음
	// 살아남은 물고기는 몇 마리인지 구하기

	let alives = [0, 0];

	let stack = [[], []];
	const differ = [1, 0];
	B.forEach((dir, idx) => {
		let weight = A[idx];
		if (dir === 1) {
			stack[1].push(weight);
		} else {
			stack[0].push(weight);
			while (stack[1].length > 0) {
				let chk = stack[1].pop();
				if (chk > weight) {
					stack[1].push(chk);
					stack[0].pop();
					break;
				}
			}
		}
	});

	return stack[0].length + stack[1].length;
}
