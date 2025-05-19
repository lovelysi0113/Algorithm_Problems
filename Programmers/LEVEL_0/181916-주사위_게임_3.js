/**
 * ABOUT
 *
 * DATE: 2025-05-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181916
 *
 * COMMENT:
 * 같은 주사위 수가 각각 몇 개인지 Set과 Map을 사용하여 계산한다
 **/

function solution(a, b, c, d) {
	const dice = [a, b, c, d].sort((i, j) => i - j);
	const diceSet = new Set(dice);
	const diceArr = Array.from(diceSet);
	const diceMap = new Map(diceArr.map(key => [key, 0]));

	dice.forEach(num => {
		diceMap.set(num, (diceMap.get(num) || 0) + 1);
	});

	const diceCount = Array.from(diceMap).sort((a, b) => b[1] - a[1]);

	const [p, firstCount] = diceCount[0];
	if (firstCount === 4) {
		return p * 1111;
	} else if (firstCount === 3) {
		const [q] = diceCount[1];
		return (10 * p + q) * (10 * p + q);
	} else if (firstCount === 2) {
		const [q, secondCount] = diceCount[1];
		if (secondCount === 2) {
			return (p + q) * Math.abs(p - q);
		} else {
			const [r] = diceCount[2];
			return q * r;
		}
	} else {
		return dice[0];
	}
}
