/**
 * ABOUT
 *
 * DATE: 2023-01-11
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/120886
 *
 * COMMENT:
 * before의 순서를 바꿔서 after를 만들 수 있다는 말은 before, after에 있는 문자 개수가 동일하다는 의미이다
 * before, after 문자를 오름차순으로 정렬한 후, 같은 index에 같은 문자인지 확인해준다
 **/

function solution(before, after) {
	let beforeSort = before.split('').sort((a, b) => strSortAsc(a, b));
	let afterSort = after.split('').sort((a, b) => strSortAsc(a, b));

	// before, after 비교
	for (let idx = 0; idx < beforeSort.length; idx++) {
		if (beforeSort[idx] !== afterSort[idx]) {
			return 0;
		}
	}

	return 1;
}

// 문자 오름차순 정렬하는 함수
function strSortAsc(a, b) {
	if (a > b) {
		return 1;
	} else if (a === b) {
		return 0;
	} else {
		return -1;
	}
}
