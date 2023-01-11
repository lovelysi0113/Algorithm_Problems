/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120860
 *
 * COMMENT:
 * 서로 다른 x좌표, y좌표를 구하여 직사각형의 넒이를 구한다
 **/

function solution(dots) {
	let xArray = [null, null];
	let yArray = [null, null];

	dots.forEach(dot => {
		const [x, y] = dot;

		if (xArray[0] === null) {
			xArray[0] = x;
		} else if (xArray[0] !== x) {
			xArray[1] = x;
		}

		if (yArray[0] === null) {
			yArray[0] = y;
		} else if (yArray[0] !== y) {
			yArray[1] = y;
		}
	});

	let width = Math.abs(xArray[0] - xArray[1]);
	let height = Math.abs(yArray[0] - yArray[1]);

	return width * height;
}
