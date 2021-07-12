/**
 * ABOUT
 *
 * DATE: 2021-04-05
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42746
 *
 * COMMENT:
 * [ 정렬 ]
 * 두 수를 비교하여 앞자리가 더 큰 수를 앞으로 가게 정렬하였다
 **/

function solution(numbers) {
	// 주어진 정수가 0뿐인 경우
	if (numbers.reduce((sum, num) => sum + num) === 0) {
		return '0';
	}

	numbers = numbers.sort((a, b) => {
		a = String(a);
		let lastA = a[a.length - 1];
		b = String(b);
		let lastB = b[b.length - 1];
		let maxLen = Math.max(a.length, b.length);
		const makeSameLen = str => {
			let newStr = new Array(maxLen - str.length).fill(str[0]);
			return str + newStr.join('');
		};
		if (maxLen === a.length) b = makeSameLen(b);
		else a = makeSameLen(a);
		if (a > b) return -1;
		if (a === b && lastA > lastB) {
			if (a.length > b.length) return 1;
			else return -1;
		}
		if (a === b && lastA < lastB) {
			if (a.length > b.length) return -1;
			else return 1;
		}
		if (a < b) return 1;
	});

	return numbers.join('');
}

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-13
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42746
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(numbers) {
	// numbers의 원소가 0만 있는 경우
	if (numbers.reduce((sum, num) => sum + num) === 0) return '0';

	// 순서를 재배치 => 가장 큰 수를 만들기 위해서는 큰 수가 앞으로 와야 함
	numbers.sort((a, b) => {
		// 두 개를 합쳐서(a+b, b+a) 더 큰 수를 찾기
		let left = String(a) + String(b);
		let right = String(b) + String(a);
		if (left > right) return -1;
		if (left < right) return 1;
		if (left === right) return 0;
	});

	// 가장 큰 수를 문자열로 바꾸어 return
	return numbers.join('');
}
