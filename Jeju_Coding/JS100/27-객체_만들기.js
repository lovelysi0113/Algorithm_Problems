/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/27-1bdb95a6719049ceb820538eda42c3a8
 *
 * COMMENT:
 * 학생의 이름이 key이고 value가 수학 점수인 객체를 만들면 된다
 **/

function solution(names, scores) {
	names = names.split(' ');
	scores = scores.split(' ').map(el => parseInt(el));
	let obj = {};
	names.forEach((name, idx) => {
		obj[name] = scores[idx];
	});
	console.log(obj);
}
