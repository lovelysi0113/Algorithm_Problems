'''/**
* ABOUT
*
* DATE: 2021-04-01
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/12928
*
* COMMENT:
* 1~제곱근(n)의 범위에서 n의 약수+짝을 찾아 더해주었다
* 테스트 케이스에서 특이한 경우를 고려해주는 부분이 어려웠다
* (n = 0일때, n = 1일때, n = 제곱의 수 일때)
**/'''

import math

def solution(n):
    if (n == 0 or n == 1):
        return n
    
    answer = 0
    
    for num in range(1, int(math.sqrt(n))+1):
        if (n % num == 0):
            answer += num
            if (num != n / num):
                answer += n / num
            
    return answer