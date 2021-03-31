'''/**
* ABOUT
*
* DATE: 2021-03-31
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12916
*
* COMMENT:
* 문자열 s에서 for문을 사용하여 p, y 개수를 센다 
**/'''

def solution(s):
    numP = 0
    numY = 0
    
    for chk in s:
        if chk == "P" or chk == "p":
            numP += 1
        elif chk == "Y" or chk == "y":
            numY += 1
            
    return numP == numY