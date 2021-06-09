'''/**
 * ABOUT
 *
 * DATE: 2021-06-09
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/12911
 *
 * COMMENT:
 * 처음 주어진 n을 2진법으로 변환하여 1의 갯수를 세어준다
 * n을 1씩 증가시킨 후 2진법으로 변환하고 1의 갯수를 세어 값을 비교한다
 * 1의 갯수가 같은 수가 나올 때까지 이 과정을 반복한다
 **/'''

def solution(n):
    one_cnt = format(n, 'b').count('1')
    
    while True:
        n += 1
        chk = format(n, 'b').count('1')
        if chk == one_cnt:
            return n