/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181921
 *
 * COMMENT:
 * 숫자를 자릿수 별로 하나씩 쪼갠 후, 각각 0 또는 5인지 확인한다
 **/

function separateDigit(num) {
	const digits = [];
	while (num > 0) {
		digits.push(num % 10);
		num = Math.floor(num / 10);
	}
	return digits;
}

function check0or5(arr) {
	return !arr.some(num => num !== 0 && num !== 5);
}

function solution(l, r) {
	const answer = [];

	for (let num = l; num <= r; num++) {
		const numArr = separateDigit(num);
		if (check0or5(numArr)) {
			answer.push(num);
		}
	}

	return answer.length === 0 ? [-1] : answer;
}
