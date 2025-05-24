/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181867
 *
 * COMMENT:
 * myString을 x로 split하여 각 부분 문자열의 길이를 구한다
 **/

function solution(myString) {
	return myString.split('x').map(str => str.length);
}
