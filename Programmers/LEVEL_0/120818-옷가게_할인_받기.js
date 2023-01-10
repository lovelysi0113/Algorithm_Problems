/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120818
 *
 * COMMENT:
 * price가 50만원, 30만원, 10만원인지 확인하여,
 * 특정 금액 이상이면 할인한 가격(소수점 버림)으로 변경해준다
 **/

function solution(price) {
	// 50만 원 이상 사면 20%를 할인
	if (price >= 500000) {
		price *= 0.8;
	}

	// 30만 원 이상 사면 10%를 할인
	else if (price >= 300000) {
		price *= 0.9;
	}

	// 10만 원 이상 사면 5%를 할인
	else if (price >= 100000) {
		price *= 0.95;
	}

	// 소수점 이하를 버린 정수를 return
	return Math.floor(price);
}
