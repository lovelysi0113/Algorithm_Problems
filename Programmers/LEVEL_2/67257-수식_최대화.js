/**
 * ABOUT
 *
 * DATE: 2021-06-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/67257
 *
 * COMMENT:
 * 우선 주어진 수식을 숫자와 연산자로 분리한다.
 * 나올 수 있는 연산자의 우선순위는 6가지이므로 각각의 경우에 대해 모두 계산해보고 그중 절대값이 가장 큰 값을 찾으면 된다
 * 이때 i번째 연산자로 계산하기 위해 i번째 숫자와 i+1번째 숫자를 사용한다
 * 이미 계산한 숫자, 연산자는 splice() 함수를 사용하여 없애준다
 **/

function solution(expression) {
	let numbers = [];
	let ops = [];

	// 수식에서 연산자, 숫자 분리
	let nowNum = '';
	for (let idx = 0; idx < expression.length; idx++) {
		let ch = expression[idx];
		if ('+-*'.includes(ch)) {
			ops.push(ch);
			numbers.push(parseInt(nowNum));
			nowNum = '';
		} else {
			nowNum += ch;
		}
	}
	numbers.push(parseInt(nowNum));

	// 연산자 우선순위 목록(연산자 조합)
	const priorityOps = [
		['+', '-', '*'],
		['+', '*', '-'],
		['-', '+', '*'],
		['*', '+', '-'],
		['-', '*', '+'],
		['*', '-', '+'],
	];

	// 계산 함수
	const calculator = (num1, op, num2) => {
		if (op === '+') return num1 + num2;
		if (op === '-') return num1 - num2;
		if (op === '*') return num1 * num2;
	};

	// 연산자 조합에서 가장 큰 결과값 구하기
	let answer = 0;
	priorityOps.forEach(el => {
		let chkNumbers = numbers.slice(0);
		let chkOps = ops.slice(0);
		let idx = 0;
		el.forEach(op => {
			while (idx < chkOps.length) {
				if (op === chkOps[idx]) {
					chkNumbers[idx] = calculator(chkNumbers[idx], chkOps[idx], chkNumbers[idx + 1]);
					chkNumbers.splice(idx + 1, 1);
					chkOps.splice(idx, 1);
					idx -= 1;
				} else {
					idx += 1;
				}
			}
			idx = 0;
		});
		answer = Math.abs(chkNumbers[0]) > answer ? Math.abs(chkNumbers[0]) : answer;
	});

	return answer;
}
