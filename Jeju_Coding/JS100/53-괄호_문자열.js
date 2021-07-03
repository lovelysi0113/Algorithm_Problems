/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/53-8776d8e89b91496cb7a3bfa09a84fe49
 *
 * COMMENT:
 * 열린 괄호, 닫힌 괄호의 갯수와 짝이 맞는지 확인하여 바른 문자열인지 찾을 수 있다
 **/

function solution(str) {
	let stack = [];
	let isCorrect = true;

	for (let idx = 0; idx < str.length; idx++) {
		if (str[idx] === '(') {
			stack.push(str[idx]);
		} else if (str[idx] === ')') {
			if (stack.length === 0) {
				isCorrect = false;
				break;
			}
			stack.pop();
		}
	}
	if (stack.length > 0) {
		isCorrect = false;
	}
	if (isCorrect) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}
