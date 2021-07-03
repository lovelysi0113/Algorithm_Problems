/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/54-169748106ffe46b6bed0e62ced61d4d5
 *
 * COMMENT:
 * 앞, 뒤 숫자를 비교하여 연속되었는지 확인할 수 있다
 **/

function solution(input) {
	let nums = input.split(' ').map(el => parseInt(el));
	let differ = nums[1] - nums[0];
	for (let idx = 1; idx < nums.length; idx++) {
		if (nums[idx + 1] - nums[idx] !== differ) {
			console.log('NO');
			return;
		}
	}
	console.log('YES');
}
