'''/**
* ABOUT
*
* DATE: 2021-04-25
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/10809
*
* COMMENT:
* 각 알파벳이 처음 나온 위치를 저장할 배열(position)을 만든다음
* 입력 단어의 글자를 하나씩 검사하며 그 글자가 처음 나온거면 그 위치를 저장해준다
* 그리고 join() 메소드를 사용하여 배열을 문자열로 출력해준다
**/'''

word = input()

ALPHABET = list('abcdefghijklmnopqrstuvwxyz')
position = [-1 for _ in range(0, len(ALPHABET))]

for idx, ch in enumerate(word):
    pos = ALPHABET.index(ch)
    if position[pos] == -1:
        position[pos] = idx

print(' '.join(map(str, position)))
