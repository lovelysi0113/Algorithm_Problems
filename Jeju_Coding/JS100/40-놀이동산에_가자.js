/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/40-592ce594719b4054a5bc4a38c5475ba5
 *
 * COMMENT:
 * 앞에서 부터 사람들의 몸무게를 더하면서 제한 무게가 넘는지 확인했다
 **/

function solution() {
	let weight = parseInt(input());
	let total = parseInt(input());
	let num = 0;
	let people = 0;
	for (let idx = 0; idx < total; idx++) {
		people += parseInt(input());
		if (people > weight) {
			break;
		} else {
			num += 1;
		}
	}
	console.log(num);
}
