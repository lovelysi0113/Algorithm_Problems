/**
 * ABOUT
 *
 * DATE: 2025-05-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181948
 *
 * COMMENT:
 * 백틱(`)을 사용하여 특수 문자를 출력한다
 * 역슬래시(\) 앞에 역슬래시를 추가해야 제대로 출력할 수 있다 (\' -> '로 출력됨)
 **/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on('close', function () {
	console.log(`!@#$%^&*(\\'"<>?:;`);
});
