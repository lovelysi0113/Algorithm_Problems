/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1834
 *
 * COMMENT:
 * N으로 나누었을 때 나머지와 몫이 같은 모든 자연수의 합을 구해야 하므로
 * 나머지(몫)이 1 ~ N-1라고 할 때의 자연수를 모두 구해서 더한다
 * 수의 범위가 크므로 BigInt()를 사용하여 구해준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
	input = parseInt(line);
}).on('close', function () {
	let answer = BigInt(0);

	for (let chk = 1; chk < input; chk++) {
		answer += BigInt(input * chk + chk);
	}

	console.log(answer.toString());

	process.exit();
});
