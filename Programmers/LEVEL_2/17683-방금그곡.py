'''/**
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
 **/'''

def solution(m, musicinfos):
    m = melody(m)
    
    # 음악 정보를 토대로 해당 음악의 재생시간, 멜로디 구하기
    musics = []
    for music in musicinfos:
        start, end, title, note = music.split(',')
        # 음악 재생 시간
        HH = int(end[0:2]) - int(start[0:2])
        MM = int(end[3:]) - int(start[3:])
        time = HH * 60 + MM
        # 재생된 멜로디
        note = melody(note)
        play = note * (time // len(note) + 1)
        musics.append([time, title, play[0:time]])
    
    answer = [0, '(None)']
    for music in musics:
        time, title, play = music
        # 멜로디(m)가 음악(play)에 포함되어 있는지 확인
        if m in play and time > answer[0]:
            answer = [time, title]
    return answer[1]

def melody(song):
    return song.replace('C#', 'c').replace('D#', 'd').replace('F#', 'f').replace('G#', 'g').replace('A#', 'a')