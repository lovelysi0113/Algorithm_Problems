/**
 * ABOUT
 *
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
 *
 * COMMENT:
 * (P,Q) 사이의 합을 구하여 그 중에서 최댓값을 찾았다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N) or O(N**3)
function solution(A) {
	// Find a maximum sum of a compact subsequence of array elements
	// slice (P, Q): A[P]~A[Q]
	// slice의 합의 최댓값 구하기

	let sums = [0];
	A.forEach((num, idx) => sums.push(sums[idx] + num));

	// slice (P, Q)의 합 = sums[Q+1] - sums[P]
	let answer = -2147483649;
	for (let P = 0; P < A.length; P++) {
		for (let Q = P; Q < A.length; Q++) {
			answer = Math.max(answer, sums[Q + 1] - sums[P]);
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
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// A[P] + A[P+1] + ... + A[Q]의 최댓값

	// N = 1이면 답은 A[0]이다
	let N = A.length;
	if (N === 1) return A[0];

	// nowSum: A[0]~A[idx]에서의 나올 수 있는 부분합의 최댓값
	let nowSum = A[0];
	// maxSum: A[0]~A[N-1]에서의 나올 수 있는 부분합의 최댓값
	let maxSum = A[0];

	for (let idx = 1; idx < N; idx++) {
		// A[0]~A[idx]에서 나올 수 있는 부분합의 경우의 수
		// 1. A[0]~A[idx-1] + A[idx]
		// 2. A[idx]
		nowSum = Math.max(nowSum + A[idx], A[idx]);
		// nowSum과 maxSum 비교
		maxSum = Math.max(maxSum, nowSum);
	}

	return maxSum;
}
