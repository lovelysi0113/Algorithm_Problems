/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/22-1b2b76da2aba48508e89b38d50b1af6c
 *
 * COMMENT:
 * 배수인지 판별하기 위해 나머지 연산자를 사용하여 값이 0이 나오는지 확인하면 된다
 **/

function solution(num) {
	if (num % 6 === 0) {
		console.log('6의 배수 입니다');
	} else {
		console.log('6의 배수가 아닙니다');
	}
}
