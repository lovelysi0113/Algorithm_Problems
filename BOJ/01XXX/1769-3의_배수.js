/**
 * ABOUT
 *
 * DATE: 2021-07-31
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1769
 *
 * COMMENT:
 * Y가 한자리 수가 될 때까지 계속 자릿수를 더해준다
 * 한자리 수일때 3의 배수인지 확인한다
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
	// 3의 배수인지 확인하는 함수(재귀)
	const chkThree = (num, cnt) => {
		// 한자리 수 일 때 종료
		if (num.length < 2) {
			let three = '369'.includes(num) ? 'YES' : 'NO';
			return [cnt, three];
		}
		// 모든 자릿수의 합 구하기
		let newNum = num.split('').reduce((sum, el) => sum + parseInt(el), 0);
		// 반복
		return chkThree(String(newNum), cnt + 1);
	};

	console.log(chkThree(input, 0).join('\n'));

	process.exit();
});
