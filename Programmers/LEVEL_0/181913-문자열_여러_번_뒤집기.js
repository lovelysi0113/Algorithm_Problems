/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181913
 *
 * COMMENT:
 * 문자열을 slice하여 s ~ e 사이의 문자열만 reverse해준다
 **/

function solution(my_string, queries) {
	let strArr = my_string.split('');
	const strLen = strArr.length;

	queries.forEach(([s, e]) => {
		let first = strArr.slice(0, s);
		let second = strArr.slice(s, e + 1).reverse();
		let third = strArr.slice(e + 1);

		strArr = [...first, ...second, ...third];
	});

	return strArr.join('');
}
