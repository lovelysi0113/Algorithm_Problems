/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 *
 * COMMENT:
 * A 배열의 요소(X)에 따라 다른 계산을 진행한다
 * 만약 max counter 계산을 해야할 경우, 해당 값을 따로 저장하고 나중에 필요할 때 저장하는 방식으로 진행한다
 * 마지막 max counter 계산 이후 increase(X) 계산을 진행하여 나온 결과값을 구하면 된다
 **/
function solution(N, A) {
	// Calculate the values of counters after applying all alternating operations:
	// increase counter by 1; set value of all counters to current maximum
	// A 배열의 요소(X)에 따라 다른 계산을 시도한다
	// 1 <= X <= N: counters[X]의 값 1 증가
	// X = N + 1: counters의 모든 요소를 가장 큰 값에 맞추기

	// counters 초기 세팅
	let counters = Array(N + 1).fill(0);

	let changed = Array(N + 1).fill(0);
	let maxCnt = 0;
	let maxIdx = [-1, 0];
	A.forEach((X, idx) => {
		if (1 <= X && X <= N) {
			// increase(X)
			if (changed[X] < maxIdx[0]) {
				changed[X] = maxIdx[0];
				counters[X] = maxIdx[1];
			}
			counters[X] += 1;
			if (maxCnt < counters[X]) {
				maxCnt = counters[X];
			}
		} else if (X === N + 1) {
			// max counters
			maxIdx = [idx, maxCnt];
			changed[X] = idx;
		}
	});

	let [idx, cnt] = maxIdx;
	if (idx > 0) {
		counters = counters.fill(cnt);
		A.slice(idx + 1).forEach(X => {
			counters[X] += 1;
		});
	}
	return counters.slice(1);
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N + M)

function solution(N, A) {
	// counters: 1~N의 갯수를 세는 카운터, 처음 값은 0
	// 두가지 연산을 할 수 있다
	// 1. increase(X): X의 값 1 증가
	// 2. max counter: 모든 값을 max값으로 변경
	// A에 맞춰 연산한 결과 구하기

	// counters: counters[X] = X의 값
	const counters = Array(N + 1).fill(0); // 0 ~ N
	// lastSet: lastSet[X] = X의 값이 마지막으로 변경된 위치
	const lastSet = Array(N + 1).fill(-1);

	let nowMax = 0; // 현재 counters의 max 값
	let maxIdx = -1; // max counter가 마지막으로 일어난 위치
	let lastMax = 0; // max counter가 일어났을 때의 max 값

	// A에 맞춰 연산하기
	for (let idx = 0; idx < A.length; idx++) {
		let now = A[idx];
		// 1. // increase(X)
		if (1 <= now && now <= N) {
			// 마지막으로 max counter가 일어났을 때의 값으로 변경해주기
			if (lastSet[now] < maxIdx) {
				counters[now] = lastMax;
			}
			// increase(X) 연산 해주기
			lastSet[now] = idx;
			counters[now] += 1;
			// 현재 counters의 max 값 찾기
			nowMax = Math.max(nowMax, counters[now]);
		}

		// 2. max counter
		else if (now === N + 1) {
			maxIdx = idx;
			lastMax = nowMax;
		}
	}

	// counters의 최솟값을 lastMax로 맞춰주기
	for (let X = 1; X <= N; X++) {
		if (counters[X] < lastMax) {
			counters[X] = lastMax;
		}
	}

	return counters.slice(1); // 0 제외하기
}
