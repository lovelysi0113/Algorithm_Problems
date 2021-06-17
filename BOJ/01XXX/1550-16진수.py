'''/**
 * ABOUT
 *
 * DATE: 2021-06-17
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/1550
 *
 * COMMENT:
 * int(num, 16)을 하면 16진수인 num을 10진수로 변환할 수 있다
 * 이때 num 앞에 '0x'가 있어야 16진수로 인지 가능하다
 **/'''

hex_num = input()

print(int('0x' + hex_num, 16))