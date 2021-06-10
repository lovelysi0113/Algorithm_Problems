/**
 * ABOUT
 *
 * DATE: 2021-06-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17687
 *
 * COMMENT:
 * 실제로 0부터 숫자 하나씩 증가해가며 n진법으로 변경한 값을 구한다
 * 튜브가 대답해야하는 숫자의 개수(m * t)만큼 n진법으로 변경한 값을 담은 배열을 만든 후
 * 튜브의 차례에 대답해야하는 수만 골라(filter() 메서드 사용) 답을 구할 수 있다
 **/

function solution(n, t, m, p) {
	let game = [0];

	let num = 1;
	const ALPHA = ['A', 'B', 'C', 'D', 'E', 'F'];
	while (game.length < m * t) {
		let nowNum = num;
		let changeNum = [];
		// 현재 숫자를 n진법으로 변환
		while (nowNum > 0) {
			let res = nowNum % n;
			if (res >= 10) {
				changeNum.unshift(ALPHA[res % 10]);
			} else {
				changeNum.unshift(res);
			}
			nowNum = parseInt(nowNum / n);
		}
		game = game.concat(changeNum);
		num += 1;
	}

	return game
		.slice(0, m * t)
		.filter((el, idx) => idx % m === p - 1)
		.join('');
}
