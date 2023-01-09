/**
 * ABOUT
 *
 * DATE: 2023-01-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120583
 *
 * COMMENT:
 * filter()를 사용하여 배열에 n이 몇 개 있는지 구할 수 있다
 **/

function solution(array, n) {
	return array.filter(el => el === n).length;
}
