/**
 * ABOUT
 *
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/8-c59d74ba23ed46b68d304fb03ac1b341
 *
 * COMMENT:
 * 객체에서 이름이 중복되면 가장 나중에 나오는 값으로 정해진다
 **/

var d = {
	height: 180,
	weight: 78,
	weight: 84,
	temperature: 36,
	eyesight: 1,
};

console.log(d['weight']); // 84
