/**
 * ABOUT
 *
 * DATE: 2021-07-03
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/59-5e36b2d5c7a34a3999812f8f9e56eb52
 *
 * COMMENT:
 * 문자열의 길이를 제외한 부분만큼 '='을 채워준다
 **/

// 내가 푼 방법
function solution(input) {
	let len = input.length;
	let blank = '';
	for (let n = 0; n < (50 - len) / 2; n++) {
		blank += '=';
	}
	console.log(blank + input + blank);
}

// 답안지
function solution(input) {
	const str = prompt('문자열을 입력해주세요.');

	const n = 25 + parseInt(str.length / 2, 10);

	//왼쪽부터 채우기
	const a = str.padStart(n, '=');

	//오른쪽까지 채워서 출력
	console.log(a.padEnd(50, '='));

	//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
	//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
}
