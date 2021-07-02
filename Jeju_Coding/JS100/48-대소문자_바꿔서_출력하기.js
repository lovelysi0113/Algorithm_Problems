/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/48-ab0fe531a1ca4042b9436c1e3dc5a75d
 *
 * COMMENT:
 * 문자 하나씩 확인하여 대소문자를 바꿔준다
 **/

function solution(str) {
	let result = '';

	str.split('').forEach(ch => {
		if (ch === ch.toUpperCase()) {
			result += ch.toLowerCase();
		} else {
			result += ch.toUpperCase();
		}
	});

	console.log(result);
}
