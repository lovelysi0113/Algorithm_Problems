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

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-06-29
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/42888
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(record) {
	let nicknames = {};
	let messages = [];

	record.forEach(el => {
		let [action, userid, name] = el.split(' ');
		if (action === 'Enter') {
			// [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장
			nicknames[userid] = name;
			messages.push([userid, '님이 들어왔습니다.']);
		} else if (action === 'Leave') {
			// [유저 아이디] 사용자가 채팅방에서 퇴장
			messages.push([userid, '님이 나갔습니다.']);
		} else if (action === 'Change') {
			// [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경
			nicknames[userid] = name;
		}
	});

	return messages.map(message => {
		return nicknames[message[0]] + message[1];
	});
}
