/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120817
 *
 * COMMENT:
 * reduce() 함수를 사용하여 배열 내 숫자들의 합을,
 * length 함수를 사용하여 배열 내 숫자 갯수를 구하여 배열의 평균값을 구할 수 있다
 **/

function solution(numbers) {
	let sum = numbers.reduce((sum, el) => sum + el, 0);
	let count = numbers.length;

	return sum / count;
}
