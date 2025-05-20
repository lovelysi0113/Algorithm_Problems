/**
 * ABOUT
 *
 * DATE: 2025-05-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181905
 *
 * COMMENT:
 * 문자열을 slice하여 s ~ e 사이의 문자열만 reverse해준다
 **/

function solution(my_string, s, e) {
	let strArr = my_string.split('');

	const first = strArr.slice(0, s);
	const second = strArr.slice(s, e + 1).reverse();
	const third = strArr.slice(e + 1);

	return [...first, ...second, ...third].join('');
}
