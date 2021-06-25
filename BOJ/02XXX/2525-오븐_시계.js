/**
 * ABOUT
 *
 * DATE: 2021-06-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2525
 *
 * COMMENT:
 * 현재 시각에서 요리 시간을 더한 후의 시각을 구하면 된다
 * 단, 23시 59분에서 1분이 지나면 0시 0분이 되는 것에 주의해야 한다
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
	let [H, M] = input[0].split(' ').map(el => parseInt(el));
	let cook = parseInt(input[1]);

	M += cook;
	H += parseInt(M / 60);
	if (H > 23) {
		H = H % 24;
	}
	M = M % 60;

	console.log(H, M);

	process.exit();
});
