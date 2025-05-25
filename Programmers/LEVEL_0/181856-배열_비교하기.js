/**
 * ABOUT
 *
 * DATE: 2025-05-25
 * AUTHOR: lovelysi0113
 *
 * URL: https://school.programmers.co.kr/learn/courses/30/lessons/181856
 *
 * COMMENT:
 * 배열의 길이와 합을 비교한다
 **/

function compareAB(a, b) {
	if (a > b) return 1;
	if (b > a) return -1;
	return 0;
}

function solution(arr1, arr2) {
	const arr1Len = arr1.length;
	const arr2Len = arr2.length;

	if (arr1Len !== arr2Len) {
		return compareAB(arr1Len, arr2Len);
	} else {
		const arr1Sum = arr1.reduce((total, num) => total + num, 0);
		const arr2Sum = arr2.reduce((total, num) => total + num, 0);
		return compareAB(arr1Sum, arr2Sum);
	}
}
