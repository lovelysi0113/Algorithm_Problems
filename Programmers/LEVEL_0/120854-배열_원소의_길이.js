/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120854
 *
 * COMMENT:
 * length() 함수를 사용하여 배열 내 각 요소들의 길이가 몇인지 구한다
 **/

function solution(strlist) {
	return strlist.map(str => str.split('').length);
}
