/**
 * ABOUT
 *
 * DATE: 2023-01-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/1208010
 *
 * COMMENT:
 * 두 수를 나눈 값의 몫을 구해준 후, 몫 * 두번째 수와 첫번째 수의 차이를 구한다
 **/

function solution(num1, num2) {
	let quotient = Math.floor(num1 / num2);
	return num1 - num2 * quotient;
}
