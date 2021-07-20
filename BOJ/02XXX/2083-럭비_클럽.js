/**
 * ABOUT
 *
 * DATE: 2021-07-20
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2083
 *
 * COMMENT:
 * 나이가 17세보다 많거나, 몸무게가 80kg 이상인지 확인한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line.split(' '));
}).on('close', function () {
	let answer = [];

	input.slice(0, -1).forEach(([name, age, weight]) => {
		let result = name + ' ';
		if (parseInt(age) > 17 || parseInt(weight) >= 80) {
			result += 'Senior';
		} else {
			result += 'Junior';
		}
		answer.push(result);
	});

	console.log(answer.join('\n'));

	process.exit();
});
