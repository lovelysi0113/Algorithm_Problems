/**
 * ABOUT
 *
 * DATE: 2021-10-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/8
 *
 * COMMENT:
 * n번 이용 후 지불할 금액은 원래 이용료 * (1 ~ n까지의 합)이다
 * 이를 이용해 총 지불해야할 금액을 구한 후 가지고 있는 돈에서 차액을 구한다
 * 단, 금액이 부족하지 않으면 0을 출력해야 한다
 **/

function solution(price, money, count) {
	let total = price * ((count * (count + 1)) / 2);

	let answer = total - money;
	return answer > 0 ? answer : 0;
}
