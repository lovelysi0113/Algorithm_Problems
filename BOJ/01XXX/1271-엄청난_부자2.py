'''/**
 * ABOUT
 *
 * DATE: 2021-06-16
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1271
 *
 * COMMENT:
 * 한 생명체에게 얼마씩 돈을 줄 수 있는가? -> 몫
 * 생명체들에게 동일하게 분배한 후 남는 돈은 얼마인가? -> 나머지
 **/'''

money, total = map(int, input().split(' '))

print(money // total)
print(money % total)