/**
 * ABOUT
 *
 * DATE: 2021-07-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/6778
 *
 * COMMENT:
 * 안테나와 눈 수를 토대로 목격자가 제공한 가능한 설명과 일치하는 외계인 목록을 구한다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(parseInt(line));
}).on('close', function () {
	let antenna = input[0];
	let eyes = input[1];

	let aliens = [];
	if (antenna >= 3 && eyes <= 4) {
		aliens.push('TroyMartian');
	}
	if (antenna <= 6 && eyes >= 2) {
		aliens.push('VladSaturnian');
	}
	if (antenna <= 2 && eyes <= 3) {
		aliens.push('GraemeMercurian');
	}

	console.log(aliens.join('\n'));

	process.exit();
});
