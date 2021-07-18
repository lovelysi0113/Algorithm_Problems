/**
 * ABOUT
 *
 * DATE: 2021-07-18
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12907
 *
 * COMMENT:
 * 돈의 종류마다 해당 거스름돈을 만들기 위해 몇 개나 필요한지 구한다
 * n원을 만드는 방법은 n-money원에서 money원을 추가하는 방법을 이용한다
 **/

function solution(n, money) {
	let change = Array(n + 1).fill(0);
	change[0] = 1;

	money.forEach(kind => {
		for (let num = 1; num <= n; num++) {
			if (num - kind >= 0) {
				change[num] += change[num - kind];
			}
			change[num] = change[num] % 1000000007;
		}
	});

	return change[n];
}
