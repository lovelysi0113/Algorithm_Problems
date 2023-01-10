/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120898
 *
 * COMMENT:
 * length() 함수를 사용하여 편지에 글자가 총 몇 자가 있는지 세어준다
 **/

function solution(message) {
	let messageLength = message.split('').length;

	return messageLength * 2;
}
