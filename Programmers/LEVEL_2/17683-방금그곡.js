/**
 * ABOUT
 *
 * DATE: 2021-06-15
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17683
 *
 * COMMENT:
 * 악보(음계)에서 #이 들어간 음계는 하나의 문자(소문자)로 치환한다면 좀 더 쉽게 풀 수 있다
 * musicinfos에서 각 음악의 정보를 토대로 재생 시간(time), 재생 시간동안 플레이된 멜로디(play)를 구한 다음
 * 한 음악씩 비교하여 네오가 기억한 멜로디(m)가 해당 음악(play)에 포함되어 있는지 확인한다
 * 그 중, 가장 긴 재생 시간을 가진 음악의 제목을 출력하면 된다
 **/

function solution(m, musicinfos) {
	m = melody(m);

	// 음악 정보를 토대로 해당 음악의 재생시간, 멜로디 구하기
	musicinfos = musicinfos.map(music => {
		music = music.split(',');
		// 음악 재생 시간
		let HH = music[1].substring(0, 2) - music[0].substring(0, 2);
		let MM = music[1].substring(3) - music[0].substring(3);
		let time = HH * 60 + MM;
		// 재생된 멜로디
		let note = melody(music[3]);
		let play = '';
		let idx = 0;
		while (idx < time) {
			play += note;
			idx += note.length;
		}
		play += note.substring(0, time - idx);
		play = play.substring(0, time);
		return [time, music[2], play];
	});

	let answer = [0, '(None)'];
	musicinfos.forEach(music => {
		let [time, title, play] = music;
		// 멜로디(m)가 음악(play)에 포함되어 있는지 확인
		if (play.includes(m) && time > answer[0]) {
			answer = [time, title];
		}
	});

	return answer[1];
}

const melody = song => {
	// 음 중 #이 있는 음은 소문자로 치환
	return song
		.replace(/(C#)/g, 'c')
		.replace(/(D#)/g, 'd')
		.replace(/(F#)/g, 'f')
		.replace(/(G#)/g, 'g')
		.replace(/(A#)/g, 'a');
};

// **************************************************************************************************** //

/**
 * ABOUT
 * DATE: 2021-07-01
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17683
 *
 * COMMENT:
 * 코딩테스트 준비로 다시 한번 풀어보았다
 **/

function solution(m, musicinfos) {
	m = setmelody(m);
	let answer = { maxtime: 0, start: '2359', title: '(None)' };
	musicinfos.forEach(musicinfo => {
		let [start, end, title, music] = musicinfo.split(',');
		let playtime = settime(start, end);
		let playmusic = setmusic(playtime, music);
		if (playmusic.includes(m)) {
			let chkstart = start.slice(0, 2) + start.slice(3);
			if (answer.maxtime < playtime || (answer.maxtime === playtime && answer.start - chkstart > 0)) {
				answer.maxtime = playtime;
				answer.start = chkstart;
				answer.title = title;
			}
		}
	});
	return answer.title;
}

function setmelody(str) {
	return str.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a');
}

function settime(start, end) {
	let [sh, sm] = start.split(':').map(el => parseInt(el));
	let [eh, em] = end.split(':').map(el => parseInt(el));
	return (eh - sh) * 60 + (em - sm);
}

function setmusic(time, music) {
	music = setmelody(music);
	let result = '';
	let num = 0;
	while (num <= time) {
		result += music;
		num += music.length;
	}
	return result.slice(0, time);
}
