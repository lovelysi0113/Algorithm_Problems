/**
 * ABOUT
 *
 * DATE: 2021-06-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42839
 *
 * COMMENT:
 * 종이 조각을 사용하여 나올 수 있는 모든 경우의 수를 구한 후(함수 permutation)
 * set으로 중복되는 수를 제외하고 남은 수들에 대해 소수를 판별(함수 isPrime)한다
 **/

function solution(numbers) {
	numbers = numbers.split('');
	let result = [];
	for (let idx = 1; idx <= numbers.length; idx++) {
		// idx = 선택할 종이 조각의 갯수
		result = result.concat(permutation(numbers, idx).map(el => parseInt(el)));
	}
	return [...new Set(result)].filter(num => isPrime(num)).length;
}

// 종이 조각으로 만들수 있는 수를 구하는 함수(순열)
const permutation = (numbers, select) => {
	let result = [];
	if (select === 1) {
		return numbers;
	}
	numbers.forEach((num, idx) => {
		// num을 제외한 나머지 숫자에서 뒷자리 정하기(재귀 사용)
		let group = permutation([...numbers.slice(0, idx), ...numbers.slice(idx + 1)], select - 1);
		group = group.map(el => [num, ...el].join(''));
		result = result.concat(group);
	});
	return result;
};

// 소수인지 판별하는 함수
const isPrime = num => {
	if (num < 2) {
		return false;
	}
	if (num === 2) {
		return true;
	}
	for (let chk = 2; chk < Math.sqrt(num) + 1; chk++) {
		if (num % chk === 0) {
			return false;
		}
	}
	return true;
};
