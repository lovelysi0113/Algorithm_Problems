/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120902
 *
 * COMMENT:
 * split() 함수를 사용하여 숫자와 연산자를 분리한다
 * 그리고 앞에서부터 차례대로 연산자를 확인하며 계산을 진행한다
 **/

function solution(my_string) {
	let equation = my_string.split(' ');
	let answer = Number(equation[0]);
	let sign = '';

	equation.slice(1).forEach((el, idx) => {
		if (idx % 2 === 0) {
			sign = el;
		} else {
			let num = Number(el);

			switch (sign) {
				case '+':
					answer += num;
					break;
				case '-':
					answer -= num;
					break;
			}
		}
	});

	return answer;
}
