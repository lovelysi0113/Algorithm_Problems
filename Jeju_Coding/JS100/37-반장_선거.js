/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/37-f56ab84018d44e7184c2307632a8c921
 *
 * COMMENT:
 * 후보 이름, 표 수를 key, value로 가지는 객체를 만들어서 최다득표자를 찾았다
 **/

function solution(str) {
	let result = {};
	str.split(' ').forEach(el => {
		if (result[el] === undefined) {
			result[el] = 0;
		}
		result[el] += 1;
	});

	let maxPerson = '';
	let maxNum = Object.keys(result).reduce((max, el) => {
		let chk = result[el];
		if (max < chk) {
			max = chk;
			maxPerson = el;
		}
		return max;
	}, 0);

	console.log(`${maxPerson}(이)가 총 ${maxNum}표로 반장이 되었습니다.`);
}
