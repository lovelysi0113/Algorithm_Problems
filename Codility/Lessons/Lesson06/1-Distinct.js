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
