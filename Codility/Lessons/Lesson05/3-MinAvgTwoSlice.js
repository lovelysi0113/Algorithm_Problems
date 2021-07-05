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
