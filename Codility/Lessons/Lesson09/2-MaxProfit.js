/**
 * ABOUT
 *
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
 *
 * COMMENT:
 * 가격들을 내림차순으로 정렬한 후 큰 값 - 작은 값을 구해 비교한다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N**2)
function solution(A) {
	// Given a log of stock prices compute the maximum possible earning
	// A[n]: n 날짜의 가격
	// profit or loss: A[Q] - A[P] (P <= Q)
	// profit의 최댓값 또는 0 반환

	A = A.map((price, idx) => [price, idx]);
	A.sort((a, b) => b[0] - a[0]);
	let mid = parseInt(A.length / 2);
	let high = A.slice(0, mid);
	let low = A.slice(mid).reverse();
	if (high.length !== low.length) {
		high.push(low[0]);
	}

	let maxProfit = 0;
	for (let a = 0; a < high.length; a++) {
		for (let b = 0; b < low.length; b++) {
			if (high[a][1] >= low[b][1]) {
				maxProfit = Math.max(maxProfit, high[a][0] - low[b][0]);
			}
		}
	}
	return maxProfit;
}
