/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120812
 *
 * COMMENT:
 * array의 요소들의 값을 key로 하는 객체를 만든 후,
 * 각 값들이 몇 번 나오는지 계산한다
 * 그리고 최빈값이 여러 개인지 객체를 순회하면서 확인해준다
 **/

function solution(array) {
	let countNum = {};

	array.forEach(el => {
		if (countNum[el] === undefined) {
			countNum[el] = 0;
		}
		countNum[el] += 1;
	});

	let maxCount = 0;
	let maxNum = [];
	Object.keys(countNum).forEach(key => {
		if (countNum[key] > maxCount) {
			maxCount = countNum[key];
			maxNum = [key];
		} else if (countNum[key] === maxCount) {
			maxNum.push(key);
		}
	});

	if (maxNum.length > 1) {
		return -1;
	} else {
		return Number(maxNum[0]);
	}
}
