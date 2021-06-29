/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42890
 *
 * COMMENT:
 * 나올 수 있는 모든 후보키 집합을 구한 다음 하나씩 유일성, 최소성을 확인한다
 * 유일성 확인: 해당 후보키로 이루어진 데이터들을 구한 다음 중복되는 데이터가 있는지 체크
 * 최소성 확인: 이미 있는 후보키와 비교하여 겹치는 속성이 있는지 체크
 **/

function solution(relation) {
	const columns = relation[0].length;

	// 나올 수 있는 후보키 집합
	let candidates = [];
	for (let num = 1; num < Math.pow(2, columns); num++) {
		let bin = num.toString(2);
		for (let cntZero = 0; cntZero < columns - bin.length; cntZero) {
			bin = '0' + bin;
		}
		candidates.push(bin);
	}
	candidates.sort((a, b) => a.length - b.length);

	let answer = [];
	candidates.forEach(keys => {
		if (isUniqueness(relation, keys) && isMinimality(keys, answer)) {
			answer.push(keys);
		}
	});

	return answer.length;
}

function isUniqueness(relation, keys) {
	// 유일성 - 속성의 집합으로 이루어진 모든 데이터에 중복되는 값이 없는지 확인
	let result = new Set();

	relation.forEach(data => {
		let tuple = '';
		keys.split('').forEach((chk, idx) => {
			if (chk === '1') {
				tuple += data[idx];
			}
		});
		result.add(tuple);
	});

	return relation.length === result.size;
}

function isMinimality(keys, answer) {
	// 최소성 - 하나 제거한 속성의 집합이 이미 존재하는지 확인
	for (let chk = 0; chk < answer.length; chk++) {
		let temp = '';
		for (let idx = 0; idx < keys.length; idx++) {
			if (keys[idx] === '1' && answer[chk][idx] === '1') {
				temp += '1';
			} else {
				temp += '0';
			}
		}
		if (temp === answer[chk]) {
			return false;
		}
	}
	return true;
}
