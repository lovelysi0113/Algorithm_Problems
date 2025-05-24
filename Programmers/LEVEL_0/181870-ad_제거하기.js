/**
 * ABOUT
 *
 * DATE: 2025-05-24
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181870
 *
 * COMMENT:
 * includes를 사용하여 ad가 포함된 문자열을 필터링한다
 **/

function solution(strArr) {
	return strArr.filter(str => !str.includes('ad'));
}
