'''/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12903
*
* COMMENT:
* 단어의 길이가 짝수인지 홀수인지 판단
**/'''

def solution(s):
    mid = len(s) // 2
    if len(s) % 2 == 1:
        return s[mid]
    else:
        return s[mid-1:mid+1]