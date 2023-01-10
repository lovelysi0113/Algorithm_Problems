/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120893
 *
 * COMMENT:
 * 각 문자를 대문자, 소문자로 변환한 뒤 값을 비교하여
 * 대문자는 소문자로, 소문자는 대문자로 변경해준다
 **/

function solution(my_string) {
	return my_string
		.split('')
		.map(str => {
			let upper = str.toUpperCase();
			let lower = str.toLowerCase();
			if (str === upper) {
				return lower;
			} else {
				return upper;
			}
		})
		.join('');
}
