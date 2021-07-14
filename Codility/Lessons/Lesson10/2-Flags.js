/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
 *
 * COMMENT:
 * K의 최댓값을 찾기 위해 binary search를 사용하였다
 **/

function solution(A) {
	// Find the maximum number of flags that can be set on mountain peaks
	// peak: A[P - 1] < A[P] > A[P + 1]
	// K flags: |P - Q| >= K
	// K의 최댓값 구하기

	// peak 위치 저장
	let peaks = [];
	for (let idx = 1; idx < A.length - 1; idx++) {
		if (A[idx - 1] < A[idx] && A[idx] > A[idx + 1]) {
			peaks.push(idx);
		}
	}

	// peak 갯수가 2개 이하
	if (peaks.length <= 2) {
		return peaks.length;
	}

	// K flags가 가능한지 확인하는 함수
	const setFlags = K => {
		let flags = K - 1;
		let start = peaks[0];
		let idx = 1;
		while (idx < peaks.length) {
			if (peaks[idx] - start >= K) {
				flags--;
				start = peaks[idx];
				if (flags === 0) {
					return true;
				}
			}
			idx++;
		}
		return false;
	};

	// binary search로 K의 최댓값 구하기
	let minNum = 2;
	let maxNum = peaks.length;
	let answer = minNum;
	while (minNum <= maxNum) {
		let midNum = Math.floor((minNum + maxNum) / 2);
		if (setFlags(midNum)) {
			answer = Math.max(answer, midNum);
			minNum = midNum + 1;
		} else {
			maxNum = midNum - 1;
		}
	}
	return answer;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// peak: A[P - 1] < A[P] > A[P + 1]
	// K개의 깃발을 꼽는다고 할 때, K 거리 이상의 peak에만 꼽을 수 있음
	// K의 최댓값 구하기

	// N <= 2이면 peak이 나올 수 없음 -> 0 리턴
	let N = A.length;
	if (N <= 2) return 0;

	// peak 구하기
	let peaks = [];
	for (let idx = 1; idx < N - 1; idx++) {
		if (A[idx - 1] < A[idx] && A[idx] > A[idx + 1]) {
			peaks.push(idx);
		}
	}

	// 만약 peak의 갯수가 2개 이하 -> peak의 갯수 리턴
	let P = peaks.length;
	if (P <= 2) return P;

	// K개의 깃발을 꼽을 수 있는지 확인하는 함수
	const canFlags = K => {
		let flags = K - 1;
		let start = peaks[0];
		for (let idx = 1; idx < P; idx++) {
			if (peaks[idx] - start >= K) {
				// peak 사이가 K 이상이면 깃발을 꼽을 수 있음
				flags -= 1;
				start = peaks[idx];
			}
		}
		if (flags <= 0) return true;
		else return false;
	};

	// K의 최댓값 찾기
	let minK = 2;
	let maxK = peaks[P - 1] - peaks[0];
	let K = minK;
	while (minK <= maxK) {
		midK = Math.floor((minK + maxK) / 2);
		if (canFlags(midK)) {
			// 깃발을 꼽을 수 있음 -> K값 범위 올리기
			K = Math.max(K, midK);
			minK = midK + 1;
		} else {
			// 깃발 꼽을 수 없음 -> K값 범위 내리기
			maxK = midK - 1;
		}
	}

	return K;
}
