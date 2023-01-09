/**
 * ABOUT
 *
 * DATE: 2023-01-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120808
 *
 * COMMENT:
 * 최대공약수를 구하는 gcd 함수를 사용하여 두 분수의 분모가 될 최소공배수 lcm을 찾는다
 * 각 분수의 분모를 lcm으로 만들어 두 분수를 더한 후,
 * 결과 값의 분자, 분모의 최대공약수를 구하여 기약 분수를 구한다
 **/

function solution(numer1, denom1, numer2, denom2) {
	// 최대공약수 구하기
	let gcdNum = gcd(denom1, denom2);

	let num1 = denom1 / gcdNum;
	let num2 = denom2 / gcdNum;

	// 분수 1 + 분수 2
	let numerAnswer = numer1 * num2 + numer2 * num1;
	let denomAnswer = num1 * num2 * gcdNum;

	// 결과 값의 분자, 분모의 최대공약수 구하기
	let gcdAnswer = gcd(numerAnswer, denomAnswer);

	// 기약 분수 만들기
	return [numerAnswer / gcdAnswer, denomAnswer / gcdAnswer];
}

function gcd(a, b) {
	if (b === 0) return a;
	else return gcd(b, a % b);
}
