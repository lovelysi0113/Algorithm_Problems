'''/**
* ABOUT
*
* DATE: 2021-04-06
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/17681
*
* COMMENT:
* 문제에 나온대로 숫자를 2진법으로 변경한 후, arr1과 arr2의 값을 비교하여 새로운 지도를 만들면 된다
**/'''


def solution(n, arr1, arr2):
    # 암호 해독 -> 숫자를 2진법으로 바꾸기
    arr1_map = []
    arr2_map = []
    for idx in range(0, n):
        line1 = format(arr1[idx], 'b')
        line1 = '0' * (n-len(line1)) + line1
        arr1_map.append(list(line1))
        line2 = format(arr2[idx], 'b')
        line2 = '0' * (n-len(line2)) + line2
        arr2_map.append(list(line2))
    #print(arr1_map, arr2_map)

    # 0 - 공백, 1 - 벽
    answer = []
    for idx in range(0, n):
        newLine = ''
        for chk in range(0, n):
            if arr1_map[idx][chk] == '0' and arr2_map[idx][chk] == '0':
                newLine += ' '
            else:
                newLine += '#'
        answer.append(newLine)
    return answer
