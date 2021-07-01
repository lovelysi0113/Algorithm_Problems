/**
 * ABOUT
 *
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/38-371eb506b05f4b8db674569a08304799
 *
 * COMMENT:
 * 점수, 해당 점수를 받은 사람 수를 key, value로 하는 객체를 만들어서 1~3위를 찾았다
 **/

function solution(input) {
	input = input.split(' ').map(el => parseInt(el));
	let scores = {};
	input.forEach(el => {
		if (scores[el] === undefined) {
			scores[el] = 0;
		}
		scores[el] += 1;
	});
	let result = Object.keys(scores);
	result.sort((a, b) => a - b);
	console.log(scores[result[0]] + scores[result[1]] + scores[result[2]]);
}
