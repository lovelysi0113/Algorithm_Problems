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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
 *
 * COMMENT:
 * 배열의 처음부터 가격을 검사하며 만약에 현재 찾은 최솟값보다 작으면 최솟값을 갱신해주고
 * 최솟값보다 크면 빼줘서 현재 인덱스까지의 최대 profit을 구한다
 * 이 과정을 반복하며 A에서 나올 수 있는 profit의 최댓값을 구할 수 있다
 **/

function solution(A) {
	// A가 빈 배열일 수 있다
	if (A.length <= 1) {
		return 0;
	}

	let profit = 0;
	let minPrice = A[0];
	A.forEach(price => {
		if (price < minPrice) {
			// 최솟값 갱신
			minPrice = price;
		} else {
			// profit의 최댓값 구하기
			profit = Math.max(profit, price - minPrice);
		}
	});
	return profit;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// profit: P <= Q일 때 A[Q] - A[P]
	// profit의 최댓값 구하기, 만약 profit이 음수이면 0 리턴

	// N이 1 이하일 때 0 리턴
	let N = A.length;
	if (N <= 1) return 0;

	let start = A[0]; // price의 최솟값 저장
	let profit = 0; // profit의 최댓값 저장
	for (let idx = 1; idx < N; idx++) {
		// start = A[0]~A[idx] 중에서 가장 최솟값
		start = Math.min(start, A[idx]);
		// now = 오늘 팔았을 때 나오는 수익
		let now = A[idx] - start;
		profit = Math.max(profit, now);
	}

	// profit이 음수이면 0 리턴
	if (profit < 0) return 0;
	else return profit;
}
