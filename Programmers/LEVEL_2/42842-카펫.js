/**
 * ABOUT
 *
 * DATE: 2021-04-22
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42842
 *
 * COMMENT:
 * [ 완전탐색 ]
 *  yellow의 가로 길이를 x, 세로 길이를 y로 한다면
 * yellow = x * y, brown = (x + y) * 2 - 4 의 값을 가진다
 * 그래서 두 식을 만족하는 x, y의 값을 찾아내면 된다
 * 우선 yellow의 약수를 구한 후(x, y가 될 수 있는 경우의 수)
 * x + y가 (brown-4) / 2가 되는 x, y를 찾는다
 **/

function solution(brown, yellow) {
	let nums = [];
	for (let num = 1; num <= Math.sqrt(yellow); num++) {
		if (yellow % num === 0) {
			nums.push(num);
			nums.push(yellow / num);
		}
	}

	brown = (brown - 4) / 2;
	while (nums.length > 0) {
		let y = nums.shift();
		let x = nums.shift();
		if (x + y === brown) {
			return [x + 2, y + 2];
		}
	}
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42842
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(brown, yellow) {
	// yellow 세로, 가로 나올 수 있는 경우의 수(약수)
	let nums = [];
	for (let num = 1; num <= Math.sqrt(yellow); num++) {
		if (yellow % num === 0) {
			nums.push([num, yellow / num]);
		}
	}

	// brown = (yellow의 세로 + yellow의 가로) * 2 + 4
	// 위 식에 맞는 yellow의 세로,가로 찾기
	for (let idx = 0; idx < nums.length; idx++) {
		let [height, width] = nums[idx];
		if ((height + width) * 2 + 4 === brown) {
			return [width + 2, height + 2];
		}
	}
}
