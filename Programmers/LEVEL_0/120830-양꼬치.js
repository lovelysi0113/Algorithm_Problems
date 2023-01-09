/**
 * ABOUT
 *
 * DATE: 2023-01-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120830
 *
 * COMMENT:
 * 서비스로 제공되는 음료수 개수를 구한 후, 총 음식 가격에서 제외한다
 **/

function solution(n, k) {
	// 서비스로 제공되는 음료수 개수
	let service = Math.floor(n / 10);

	// 서비스를 제외한 음식의 총 가격
	return n * 12000 + (k - service) * 2000;
}
