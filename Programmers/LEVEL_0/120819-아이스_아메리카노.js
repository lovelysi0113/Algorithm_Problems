/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120819
 *
 * COMMENT:
 * 가지고 있는 돈에서 아메리카노 가격을 나눠서 최대로 몇 잔을 마실 수 있는지 구할 수 있다
 **/

function solution(money) {
	// 최대로 마실 수 있는 아메리카노의 잔 수
	let americano = Math.floor(money / 5500);
	// 남는 돈
	let change = money % 5500;

	return [americano, change];
}
