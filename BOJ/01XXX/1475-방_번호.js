/**
 * ABOUT
 *
 * DATE: 2021-07-31
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1475
 *
 * COMMENT:
 * 각 숫자 별로 몇 개가 있는지 계산한 다음 제일 많이 사용된 숫자의 갯수를 출력해준다(그만큼의 세트의 갯수가 필요하다는 의미)
 * 이때, 6, 9는 같이 사용가능하므로 6, 9의 갯수를 더하고 2로 나눈 수만큼의 세트의 갯수가 필요하다
 **/

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line;
}).on('close', function () {
	const nums = Array(10).fill(0);

	// 각 숫자 별로 몇 개가 있는지 확인
	input.split('').forEach(el => {
		nums[parseInt(el)] += 1;
	});

	// 6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다
	nums[6] = Math.ceil((nums[6] + nums[9]) / 2);

	// 필요한 세트의 개수
	console.log(Math.max(...nums.slice(0, -1)));

	process.exit();
});
