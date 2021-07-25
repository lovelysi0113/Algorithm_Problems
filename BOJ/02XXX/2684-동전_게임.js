/**
 * ABOUT
 *
 * DATE: 2021-07-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/2684
 *
 * COMMENT:
 * 동전을 40번 던진 결과를 앞에서부터 3개씩 확인하며 3-동전수열 중 어디에 속하는지 체크한다
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
	// 3-동전수열: 뒤뒤뒤,뒤뒤앞,뒤앞뒤,뒤앞앞,앞뒤뒤,앞뒤앞,앞앞뒤,앞앞앞
	const coin = { TTT: 0, TTH: 1, THT: 2, THH: 3, HTT: 4, HTH: 5, HHT: 6, HHH: 7 };

	let answer = [];

	input.slice(1).forEach(el => {
		let result = Array(8).fill(0);
		// 3-동전수열이 각각 몇 번씩 나왔는지 기록
		for (let idx = 0; idx < el.length - 2; idx++) {
			let chk = el.slice(idx, idx + 3);
			result[coin[chk]] += 1;
		}
		answer.push(result.join(' '));
	});

	console.log(answer.join('\n'));

	process.exit();
});
