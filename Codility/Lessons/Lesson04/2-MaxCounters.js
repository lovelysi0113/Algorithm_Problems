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
