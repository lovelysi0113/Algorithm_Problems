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
