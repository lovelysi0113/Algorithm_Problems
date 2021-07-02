/**
 * ABOUT
 *
 * DATE: 2021-07-02
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/42-2020-ae1dd4dc05cd43dbb7475afb52bc00c4
 *
 * COMMENT:
 * 주어진 월, 일을 계산하여 총 몇일인지 구한 후 7로 나누어 요일을 구한다
 **/

function solution(a, b) {
	const DAYS = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'];
	const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let day = Math.sum(months.slice(0, a)) + b;
	console.log(DAYS[day % 7]);
}
