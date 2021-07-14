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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A, B) {
	// A[K]: K 물고기의 크기
	// B[K]: K 물고기의 방향
	// 두 물고기가 마주쳤을 때 크기가 큰 물고기가 작은 물고기를 잡아먹음
	// 살아남은 물고기의 수를 구해야 한다

	// N = 1이면 답은 무조건 1이다
	let N = A.length;
	if (N === 1) return 1;

	// upstream: 위로 올라가는(0) 물고기들
	// downstream: 아래로 내려가는(1) 물고기들
	let upstream = [];
	let downstream = [];

	for (let K = 0; K < N; K++) {
		let nowFish = A[K];
		if (B[K] === 0) {
			// 현재 물고기: 위로 올라감
			if (downstream.length === 0) {
				// 마주치는 물고기 없음
				upstream.push(nowFish);
			} else {
				while (downstream.length > 0) {
					// 물고기 마주침 -> 크기 비교
					let meetFish = downstream.pop();
					if (meetFish > nowFish) {
						// 아래로 내려가는 고기가 더 큼
						downstream.push(meetFish);
						break;
					}
				}
				if (downstream.length === 0) {
					// 현재 물고기가 제일 큼
					upstream.push(nowFish);
				}
			}
		} else {
			// 현재 물고기: 아래로 내려감 -> 마주치는 물고기 없음
			downstream.push(nowFish);
		}
	}

	// 살아남은 물고기 수 = 위로 올라가는 물고기 수 + 아래로 내려가는 물고기 수
	return upstream.length + downstream.length;
}
