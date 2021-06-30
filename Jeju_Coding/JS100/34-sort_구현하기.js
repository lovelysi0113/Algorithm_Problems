/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/34-sort-35f9e8bed7f34f5a8722588b400d0d8c
 *
 * COMMENT:
 * 순서대로 제대로 섰는지 확인하기 위해 연속된 요소들을 비교했다
 **/

function solution(input) {
	let arr = input.split(' ').map(el => parseInt(el));
	for (let idx = 0; idx < arr.length - 1; idx++) {
		if (arr[idx] > arr) {
			console.log('NO');
			return;
		}
	}
	console.log('YES');
}
