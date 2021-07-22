/**
 * ABOUT
 *
 * DATE: 2021-07-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10769
 *
 * COMMENT:
 * 정규표현식을 사용하여 ':-)'와 ':-('의 갯수를 세어준다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = '';

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	let happy = (input.match(/[:][-][)]/g) || []).length;
	let sad = (input.match(/[:][-][(]/g) || []).length;

	if (happy === 0 && sad === 0) {
		console.log('none');
	} else if (happy === sad) {
		console.log('unsure');
	} else if (happy > sad) {
		console.log('happy');
	} else if (happy < sad) {
		console.log('sad');
	}

	process.exit();
});
