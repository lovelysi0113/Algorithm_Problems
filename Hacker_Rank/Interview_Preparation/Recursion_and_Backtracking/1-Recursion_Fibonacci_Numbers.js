/**
 * ABOUT
 *
 * DATE: 2021-07-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
 *
 * COMMENT:
 * fibonacci(n) = fibonacci(n-1) + fibonacci(n-2) 를 이용하여 n번째 피보나치 수를 구한다
 **/

function processData(input) {
	var n = parseInt(input);
	console.log(fibonacci(n));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
	_input += input;
});

process.stdin.on('end', function () {
	processData(_input);
});

function c(n) {
	const fibo = [0, 1];
	for (let idx = 2; idx <= n; idx++) {
		fibo[idx] = fibo[idx - 1] + fibo[idx - 2];
	}
	return fibo[n];
}
