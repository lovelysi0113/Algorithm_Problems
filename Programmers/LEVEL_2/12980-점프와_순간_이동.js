/**
 * ABOUT
 *
 * DATE: 2021-06-10
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12980
 *
 * COMMENT:
 * 0부터 n까지 이동하는 것이 아닌 n부터 0으로 이동하는 걸로 생각하면 쉽게 구할 수 있다
 * (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동을 할 때는 건전지 사용량이 줄지 않으므로
 * n이 짝수일 때는 절반인 위치로 이동해도 건전지를 사용하지 않아도 된다(거꾸로 생각하면 쉬움)
 * 만약 절반인 위치로 이동할 수 없을 때는 앞으로 1칸 움직인 다음(이때 건전지 사용량 1 증가함)에 순간이동을 시도한다
 * 이 과정을 반복하여 0까지 이동한 후 나온 건전지 사용량으로 최소값을 구할 수 있다
 **/

function solution(n) {
	let move = 0;

	while (n > 0) {
		if (n % 2 === 0) {
			n = n / 2;
		} else {
			n -= 1;
			move += 1;
		}
	}

	return move;
}
