/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181904
 *
 * COMMENT:
 * 문자열을 m개씩 자른 후 c번째 열(인덱스로는 c+1)의 문자들만 모아준다
 **/

function solution(my_string, m, c) {
	const strArr = [];

	for (let i = 0; i < my_string.length; i += m) {
		const subStr = my_string.slice(i, i + m);
		strArr.push(subStr.split(''));
	}

	return strArr.map(arr => arr[c - 1]).join('');
}
