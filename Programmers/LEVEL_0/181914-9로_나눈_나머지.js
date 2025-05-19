/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181914
 *
 * COMMENT:
 * 숫자를 문자열로 변환 후 split하여 각 자리수를 배열로 만든다
 **/

function solution(number) {
	const digitArr = String(number).split('');
	const sum = digitArr.reduce((result, num) => result + Number(num), 0);

	return sum % 9;
}
