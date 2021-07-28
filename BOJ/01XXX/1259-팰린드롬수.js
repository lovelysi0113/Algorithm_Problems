/**
 * ABOUT
 *
 * DATE: 2021-07-28
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1259
 *
 * COMMENT:
 * 앞부분과 뒷부분을 하나씩 비교하여 해당 수가 팬린드롬수인지 확인한다
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
	let answer = [];

	input.slice(0, -1).forEach(num => {
		let len = num.length;
		let isPalindrome = true;
		for (let idx = 0; idx <= len / 2; idx++) {
			if (num[idx] !== num[len - idx - 1]) {
				isPalindrome = false;
				break;
			}
		}

		if (isPalindrome) {
			answer.push('yes');
		} else {
			answer.push('no');
		}
	});

	console.log(answer.join('\n'));

	process.exit();
});
