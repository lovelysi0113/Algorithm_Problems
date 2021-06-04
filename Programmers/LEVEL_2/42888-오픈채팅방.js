/**
 * ABOUT
 * DATE: 2021-06-04
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42888
 *
 * COMMENT:
 * record에 담긴 문자열을 행동, 유저 아이디, 닉네임으로 분리한 후 action에 따라 메시지를 띄우거나 닉네임을 변경한다
 * record을 모두 확인한 후, 해당 유저 아이디의 가장 최근 닉네임으로 채팅방 메시지를 출력하면 된다
 **/

function solution(record) {
	let nickname = {};
	let answer = [];

	record.forEach(str => {
		let [action, userId, userName] = str.split(' ');
		if (action === 'Enter') {
			nickname[userId] = userName;
			answer.push([userId, '님이 들어왔습니다.']);
		} else if (action === 'Leave') {
			answer.push([userId, '님이 나갔습니다.']);
		} else if (action === 'Change') {
			nickname[userId] = userName;
		}
	});

	return answer.map(el => {
		el[0] = nickname[el[0]];
		return el.join('');
	});
}
