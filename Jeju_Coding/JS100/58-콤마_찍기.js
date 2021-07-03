/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/58-4152dead59ad4ab7801752d6604e037d
 *
 * COMMENT:
 * 천 단위로 콤마(,)를 찍기 위해 숫자를 3자리씩 잘랐다
 **/

function solution(input) {
	let result = '';
	let idx = input.length;
	while (idx >= 3) {
		result = ',' + input.slice(idx - 3, idx) + result;
		idx -= 3;
	}
	console.log(result.slice(1));
}
