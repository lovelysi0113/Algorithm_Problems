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
