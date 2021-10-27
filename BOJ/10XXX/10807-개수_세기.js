/**
 * ABOUT
 *
 * DATE: 2021-10-27
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10807
 *
 * COMMENT:
 * filter 메소드를 사용하여 v가 몇 개인지 구한다
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
	let v = parseInt(input[2]);
	let nums = input[1].split(' ').map(el => parseInt(el));

	console.log(nums.filter(num => num === v).length);

	process.exit();
});
