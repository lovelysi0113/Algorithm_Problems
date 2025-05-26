/**
 * ABOUT
 *
 * DATE: 2025-05-26
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181838
 *
 * COMMENT:
 * year, month, day를 각각 비교하여 date1이 date2보다 이전인지 확인한다
 **/

function solution(date1, date2) {
	const [year1, month1, day1] = date1;
	const [year2, month2, day2] = date2;

	if (year1 < year2) return 1;
	else if (year1 > year2) return 0;
	else if (month1 < month2) return 1;
	else if (month1 > month2) return 0;
	else if (day1 < day2) return 1;
	else return 0;
}
