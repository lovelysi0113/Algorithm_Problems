/**
 * ABOUT
 *
 * DATE: 2021-07-06
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
 *
 * COMMENT:
 * 세 수의 조합을 구한다음에 각각의 경우에서 나오는 합을 구해 비교한다
 * 그런데 timeout error가 나왔다 어떻게 풀어야할지 좀 더 고민해봐야 할 것 같다...ㅠㅠ
 **/

// TIMEOUT ERROR
// time complexity: O(N**3)
function solution(A) {
	// Find the maximal sum of any double slice
	// double slice: A[X+1]~A[Y-1], A[Y+1]~A[Z-1]
	// double slice의 합 중에서 최댓값 구하기

	const len = A.length;
	if (len === 3) {
		return 0;
	}
	if (len === 4) {
		return Math.max(...A, 0);
	}

	// sums[idx]: 0~idx까지의 합
	let sums = [A[0]];
	for (let idx = 1; idx < len; idx++) {
		sums.push(sums[idx - 1] + A[idx]);
	}

	let nums = [];
	for (let num = 0; num < len; num++) {
		nums.push(num);
	}
	let combs = combination(nums, 3);

	let answer = -10001 * 3;
	combs.forEach(([a, b, c]) => {
		if (a !== c + 2) {
			let chk = sums[c - 1] - sums[a] - A[b];
			answer = Math.max(answer, chk);
		}
	});
	return answer;
}

function combination(arr, select) {
	if (select === 1) {
		return arr.map(el => [el]);
	}
	let result = [];
	for (let idx = 0; idx < arr.length; idx++) {
		let rest = combination(arr.slice(idx + 1), select - 1);
		let restAll = rest.map(el => [arr[idx], ...el]);
		result.push(...restAll);
	}
	return result;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N)

function solution(A) {
	// A[X + 1] + A[X + 2] + ... + A[Y - 1] + A[Y + 1] + A[Y + 2] + ... + A[Z - 1]의 최댓값 구하기

	// N = 3인 경우, 답은 무조건 0이다
	let N = A.length;
	if (N === 3) return 0;

	// 나올 수 있는 Y의 범위
	let minY = 1;
	let maxY = N - 2;

	// left[idx]: A[0]~A[idx]에서 나올 수 있는 부분합의 최댓값
	let left = Array(N).fill(0);
	for (let idx = minY; idx <= maxY; idx++) {
		left[idx] = Math.max(0, left[idx - 1] + A[idx]);
	}
	// right[idx]: A[idx]~A[N-1]에서 나올 수 있는 부분합의 최댓값
	let right = Array(N).fill(0);
	for (let idx = maxY; idx >= minY; idx--) {
		right[idx] = Math.max(0, right[idx + 1] + A[idx]);
	}

	// Y를 기준으로 left[Y-1] + right[Y+1] 중에서 최댓값 찾기
	let answer = 0;
	for (let Y = minY; Y <= maxY; Y++) {
		answer = Math.max(answer, left[Y - 1] + right[Y + 1]);
	}
	return answer;
}
