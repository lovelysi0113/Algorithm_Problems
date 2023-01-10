/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120909
 *
 * COMMENT:
 * Math.sqrt() 함수로 제곱근을 구하고 이를 정수로 바꾼 값과 기존값이 같은지 확인한다
 **/

function solution(n) {
	let check = Math.sqrt(n);

	return check === Math.floor(check) ? 1 : 2;
}
