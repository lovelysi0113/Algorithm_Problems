/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/49-2052f88fe90f4bde93cea5fb63627483
 *
 * COMMENT:
 * sort()나 max() 함수를 사용하여 최댓값을 구할 수 있다
 **/

function solution(input) {
	let nums = input.split(' ').map(el => parseInt(el));

	// 방법 1
	nums.sort((a, b) => b - a);
	console.log(nums[0]);

	// 방법 2
	console.log(Math.max(nums));
}
