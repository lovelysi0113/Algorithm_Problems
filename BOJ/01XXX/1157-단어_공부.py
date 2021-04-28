'''/**
* ABOUT
*
* DATE: 2021-04-28
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/1157
*
* COMMENT:
* 대소문자를 구분하지 않으므로 단어를 모두 대문자로 변경하여 작업한다
* 단어의 문자를 하나씩 확인하면서 알파벳 갯수를 세어준다
* 그리고 각 알파벳의 갯수를 비교하며 가장 많이 사용된 알파벳을 찾는다
**/'''

word = input().upper()

ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
count_chr = [0 for _ in range(len(ALPHABET))]

for ch in word:
    count_chr[ALPHABET.index(ch)] += 1

max_result = {'num': 0, 'idx': 0, 'cnt': 0}
for idx, num in enumerate(count_chr):
    if num > max_result['num']:
        max_result['num'] = num
        max_result['idx'] = idx
        max_result['cnt'] = 1
    elif num == max_result['num']:
        max_result['cnt'] += 1

if max_result['cnt'] == 1:
    print(ALPHABET[max_result['idx']])
else:
    print('?')
