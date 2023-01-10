/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120814
 *
 * COMMENT:
 * n을 7로 나눈 몫이 필요한 피자의 개수가 된다
 * 이때, n을 7로 나눈 나머지가 0보다 크면 피자를 못받은 사람이 있다는 의미이므로
 * 피자 1판이 더 필요하다
 **/

function solution(n) {
	let pizza = Math.floor(n / 7);
	let piece = n % 7;

	return pizza + (piece > 0 ? 1 : 0);
}
