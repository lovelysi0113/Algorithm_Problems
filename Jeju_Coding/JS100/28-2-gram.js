/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/28-2-gram-fb3e43a5c88f4745932844d1ebac7725
 *
 * COMMENT:
 * for문을 사용하여 문자열에서 2개의 연속된 요소를 출력한다
 **/

function solution(str) {
	for (let idx = 0; idx < str.length - 1; idx++) {
		console.log(str[idx], str[idx + 1]);
	}
}
