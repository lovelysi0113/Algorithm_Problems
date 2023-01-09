/**
 * ABOUT
 *
 * DATE: 2023-01-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120585
 *
 * COMMENT:
 * filter()를 사용하여 머쓱이보다 키 큰 사람이 몇 명 있는지 구할 수 있다
 **/

function solution(array, height) {
	return array.filter(el => el > height).length;
}
