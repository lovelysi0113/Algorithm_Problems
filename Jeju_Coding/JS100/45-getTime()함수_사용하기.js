/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/45-getTime-88b0941980cc47859649df7576966391
 *
 * COMMENT:
 * getTime() 함수를 사용하여 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환할 수 있다
 **/

function solution() {
	const year = new Date().getTime();
	year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;
	console.log(year);
}
