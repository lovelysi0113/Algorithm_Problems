/**
 * ABOUT
 *
 * DATE: 2021-06-30
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.notion.so/26-2-a9ae3f90c41c4aef96af9c10f13a1d5d
 *
 * COMMENT:
 * 각 행성의 한글 이름과 영어 이름을 key, value로 한 planet이라는 객체를 만들어주었다
 **/

function solution(name) {
	const planet = {
		수성: 'Mercury',
		금성: 'Venus',
		지구: 'Earth',
		화성: 'Mars',
		목성: 'Jupiter',
		토성: 'Saturn',
		천왕성: 'Uranus',
		해왕성: 'Neptune',
	};
	console.log(planet[name]);
}
