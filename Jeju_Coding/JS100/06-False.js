/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/6-False-75e3067aaa0c48c98ba1e19ef086fb71
 *
 * COMMENT:
 * falsy 값 - false, null, undefined, 0, NaN, ''(빈 문자열)
 **/

// 임의의 값을 입력받아 falsy 값인지 여부를 리턴하는 함수
function isFalsy(anything) {
	if (anything === false) {
		return true;
	} else if (anything === null) {
		return true;
	} else if (anything === undefined) {
		return true;
	} else if (anything === 0) {
		return true;
	} else if (isNaN(anything)) {
		return true;
	} else if (anything === '') {
		return true;
	} else {
		return false;
	}
}
