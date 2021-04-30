'''/**
* ABOUT
*
* DATE: 2021-04-30
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2941
*
* COMMENT:
* 입력으로 주어진 단어를 앞에서 부터 2글자나 3글자로 나누어 그게 크로아티아 알파벳인지 확인해본다
* 맞으면 2글자(또는 3글자)를 잘라내고 다음 글자를 확인하는 식으로
* 앞에서부터 차례대로 하나씩 확인해보면 되는 어렵지않은 문제이다
**/'''

words = input()

croatia = ['dz=', 'c=', 'c-', 'd-', 'lj', 'nj', 's=', 'z=']

answer = 0
while len(words) > 0:
    if words[0:2] in croatia:
        answer += 1
        words = words[2:]
    elif words[0:3] == croatia[0]:
        answer += 1
        words = words[3:]
    else:
        answer += 1
        words = words[1:]

print(answer)
