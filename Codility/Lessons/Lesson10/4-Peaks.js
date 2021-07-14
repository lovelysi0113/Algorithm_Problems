/**
 * ABOUT
 *
 * DATE: 2021-07-07
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/
 *
 * COMMENT:
 * 나올 수 있는 blocks의 갯수를 구한 뒤 하나씩 검사하여 각 block에 peak가 1개 이상 있는지 확인한다
 **/

function solution(A) {
	// Divide an array into the maximum number of same-sized blocks,
	// each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1]
	// peak: A[P - 1] < A[P] > A[P + 1]
	// peak이 포함된 blocks로 나눌 수 있는 최대 blocks의 갯수 구하기

	// peak 위치 저장
	let peaks = [];
	for (let idx = 1; idx < A.length - 1; idx++) {
		if (A[idx - 1] < A[idx] && A[idx] > A[idx + 1]) {
			peaks.push(idx);
		}
	}

	let peakCnt = peaks.length;
	// peak 갯수가 1개 이하
	if (peakCnt <= 1) {
		return peakCnt;
	}

	// A.length의 약수 구하기(가능한 blocks 갯수 구하기)
	let N = A.length;
	let factors = [];
	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			factors.push(num);
			if (num * num !== N) {
				factors.push(N / num);
			}
		}
	}
	factors.sort((a, b) => a - b);

	// 나눌 수 있는 blocks 갯수의 최댓값 구하기
	for (let idx = 0; idx < factors.length; idx++) {
		let cnt = factors[idx];
		let blocks = N / cnt;
		if (blocks > peakCnt) {
			continue;
		}
		let idxPeak = 0;
		let isPeak = true;
		for (let idxA = 0; idxA < N; idxA += cnt) {
			let chk = 0;
			while (idxA <= peaks[idxPeak] && peaks[idxPeak] <= idxA + cnt - 1) {
				chk++;
				idxPeak++;
			}
			if (chk === 0) {
				isPeak = false;
				break;
			}
		}
		if (isPeak) {
			return blocks;
		}
	}
	return 0;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N * log(log(N)))

function solution(A) {
	// peak: A[P - 1] < A[P] and A[P] > A[P + 1]
	// A를 k 길이를 가진 block으로 잘랐을 때 모든 block에 peak이 있어야 한다
	// block을 최대 몇개로 자를 수 있는지 구하기

	// N이 2 이하 -> peak이 없음
	let N = A.length;
	if (N <= 2) return 0;

	// peak 구하기
	let peaks = [];
	for (let idx = 1; idx < N - 1; idx++) {
		if (A[idx - 1] < A[idx] && A[idx] > A[idx + 1]) {
			peaks.push(idx);
		}
	}

	// peak의 갯수가 1개 이하
	let P = peaks.length;
	if (P <= 1) return P;

	// 가능한 block의 수 구하기
	let blocks = [];
	for (let num = 1; num <= Math.sqrt(N); num++) {
		if (N % num === 0) {
			blocks.push(num);
			if (num * num !== N) {
				blocks.push(N / num);
			}
		}
	}

	// block의 최댓값 구하기
	blocks.sort((a, b) => b - a);
	for (let idx = 0; idx < blocks.length; idx++) {
		// 블록 갯수가 peak의 갯수보다 많으면 확인할 필요 없음
		if (blocks[idx] > P) continue;
		let K = N / blocks[idx];
		let peakIdx = 0;
		// 각 block 안에 peak이 있는지 확인하기
		let containPeak = true;
		for (let aIdx = 0; aIdx < N; aIdx += K) {
			let peakCnt = 0;
			while (aIdx <= peaks[peakIdx] && peaks[peakIdx] < aIdx + K) {
				peakIdx += 1;
				peakCnt += 1;
			}
			if (peakCnt === 0) {
				containPeak = false;
				break;
			}
		}
		if (containPeak) return blocks[idx];
	}
	return 0;
}
