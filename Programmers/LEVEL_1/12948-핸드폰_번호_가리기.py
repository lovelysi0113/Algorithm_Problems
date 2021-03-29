'''/**
* ABOUT
*
* DATE: 2021-03-29
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12948
*
* COMMENT:
* 배열에서 마지막 4자리만 가져오고
* 나머지 길이만큼 '*'를 채운다
**/'''

def solution(phone_number):
    return "*" * (len(phone_number)-4) + phone_number[-4:]