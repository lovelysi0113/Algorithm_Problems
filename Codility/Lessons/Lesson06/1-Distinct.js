/**
 * ABOUT
 *
 * DATE: 2021-07-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/distinct/
 *
 * COMMENT:
 * 배열에 존재하는 숫자들의 종류를 알기 위해 객체를 활용했다
 **/

function solution(A) {
	// Compute number of distinct values in an array
	// 배열에 있는 숫자 종류의 갯수 세기

	let nums = {};
	A.forEach(el => {
		if (nums[el] === undefined) {
			nums[el] = 0;
		}
		nums[el] += 1;
	});

	return Object.keys(nums).length;
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://app.codility.com/programmers/lessons/6-sorting/distinct/
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

// 시간 복잡도: O(N*log(N)) or O(N)

function solution(A) {
	// 배열 A에 있는 숫자 종류가 몇 개인지 구하기

	// N = 0이면 답은 무조건 0이다
	// N = 1이면 답은 무조건 1이다
	let N = A.length;
	if (N <= 1) return N;

	// num[K] = 값이 있으면 K가 배열 A에 있다
	let num = {};
	// 숫자 종류의 갯수
	let distinct = 0;

	for (let idx = 0; idx < N; idx++) {
		let value = A[idx];
		if (num[value] === undefined) {
			distinct += 1;
			num[value] = true;
		}
	}

	return distinct;
}
