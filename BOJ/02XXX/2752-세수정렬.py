'''/**
* ABOUT
*
* DATE: 2021-05-20
* AUTHOR: lovelysi0113
*
* URL: https://www.acmicpc.net/problem/2752
*
* COMMENT:
* sort() 메소드를 사용하여 오름차순 정렬이 가능하다
**/'''

num_list = list(map(int, input().split(' ')))
num_list.sort()
print(' '.join(list(map(str, num_list))))
