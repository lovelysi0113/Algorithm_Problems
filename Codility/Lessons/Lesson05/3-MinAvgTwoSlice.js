/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 *
 * COMMENT:
 * 0부터 N까지 잘라가며 잘린 배열의 평균값을 구한다
 * 이중에서 가장 최솟값을 찾아 그때의 시작 인덱스를 구한다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N ** 2)
function solution(A) {
	// Find the minimal average of any slice containing at least two elements
	// slice한 배열의 평균값 중에서 최솟값일 때의 start 위치 구하기

	let sum = [0];
	A.forEach((a, idx) => {
		let now = sum[idx] + a;
		sum.push(now);
	});

	let minAvg = Infinity;
	let minIdx = -1;
	for (let num = 2; num <= A.length; num++) {
		for (let idx = 0; idx <= A.length - num; idx++) {
			let result = (sum[idx + num] - sum[idx]) / num;
			if (result < minAvg) {
				minAvg = result;
				minIdx = idx;
			}
		}
	}

	return minIdx;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 *
 * COMMENT:
 * 귀류법을 통해 2~3개의 평균을 구해 그 중에서 최소값을 찾으면 되는 것을 알 수 있다
 * 최소 평균인 구간의 길이가 4라고 가정한다
 * 해당 구간의 수를 a, b, c, d라고 한다면 a, b, c, d의 평균은 (a, b)의 평균과 (c, d)의 평균이다
 * 만약 두 구간의 평균이 같다면((a, b, c, d) = (a, b)) 답은 시작 인덱스인 a의 인덱스가 된다
 * 만약 두 구간 중 한쪽의 구간의 평균이 더 작다면 작은 구간을 택해야 평균이 낮아지므로 최소 평균 구간이 (a, b, c, d)가 될 수 없다
 * 따라서 평균이 최소가 되는 구간의 길이는 4일 수 없다
 * 이후 2개, 3개씩만 비교하면서 문제를 풀면 된다
 **/

function solution(A) {
	let startIdx = 0;
	let minAvg = (A[0] + A[1]) / 2;

	for (let idx = 2; idx < A.length; idx++) {
		// 2개의 평균 구하기
		let avg1 = (A[idx] + A[idx - 1]) / 2;
		if (avg1 < minAvg) {
			minAvg = avg1;
			startIdx = idx - 1;
		}
		// 3개의 평균 구하기
		let avg2 = (A[idx] + A[idx - 1] + A[idx - 2]) / 3;
		if (avg2 < minAvg) {
			minAvg = avg2;
			startIdx = idx - 2;
		}
	}

	return startIdx;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// 배열 A에서 A[P]~A[Q]의 평균값이 최소가 되는 P 구하기

	// 예외처리: N이 2이면 P는 무조건 0이다
	let N = A.length;
	if (N === 2) return 0;

	// minAvg: A[P]~A[Q]의 평균값의 최솟값
	let minAvg = (A[0] + A[1]) / 2;
	let P = 0;

	for (let idx = 2; idx < N; idx++) {
		// 2개의 평균값 구하기
		let twoAvg = (A[idx] + A[idx - 1]) / 2;
		if (twoAvg < minAvg) {
			minAvg = twoAvg;
			P = idx - 1;
		}
		// 3개의 평균값 구하기
		let threeAvg = (A[idx] + A[idx - 1] + A[idx - 2]) / 3;
		if (threeAvg < minAvg) {
			minAvg = threeAvg;
			P = idx - 2;
		}
	}

	return P;
}
