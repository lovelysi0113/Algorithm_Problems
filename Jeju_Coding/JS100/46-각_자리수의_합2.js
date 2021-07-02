/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/46-2-1349c673327740de973e50d1297354f5
 *
 * COMMENT:
 * 1 ~ 20 수에서 모든 자릿수의 총 합을 구한다
 **/

function solution() {
	let result = 0;
	for (let num = 1; num <= 20; num++) {
		let chk = num;
		while (chk > 0) {
			result += chk % 10;
			chk = parseInt(chk / 10);
		}
	}
	console.log(result);
}
