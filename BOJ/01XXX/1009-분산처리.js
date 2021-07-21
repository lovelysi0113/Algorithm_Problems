/**
 * ABOUT
 *
 * DATE: 2021-07-21
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1009
 *
 * COMMENT:
 * 데이터 갯수(a의 b승)를 10으로 나눈 나머지로 마지막 데이터가 처리될 컴퓨터의 번호를 구할 수 있다
 * 그런데 pow() 함수를 사용해서 데이터 갯수를 구하면 자릿수 초과가 될 수 있다
 * 그래서 a를 b만큼 곱하는 과정에서 계속 마지막 자리만 계산해주는 방식을 사용한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let computer = 10;

	let answer = [];

	input.slice(1).forEach(el => {
		let [a, b] = el.split(' ').map(el => parseInt(el));
		let num = 0;
		let result = 1;
		// 데이터 갯수에 a를 b만큼 계속 곱해준다
		// 자릿수 초과를 방지하기 위해 마지막 자리만 계산해준다
		while (num < b) {
			result = (result * a) % computer;
			num += 1;
		}
		if (result === 0) {
			result = computer;
		}
		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});
