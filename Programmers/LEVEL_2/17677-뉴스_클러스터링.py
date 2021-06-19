'''/**
 * ABOUT
 *
 * DATE: 2021-06-19
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/17677
 *
 * COMMENT:
 * 대문자, 소문자 차이는 무시하므로 우선 두 문자열을 모두 대문자로 변경한다
 * 그리고 각 문자열을 두글자씩 끊어서 다중집합을 만든다
 * 두 개의 다중집합을 비교하면서 겹치는 원소는 교집합으로 넣고
 * 나머지는 모두 합집합에 넣는 방식으로 두 집합의 교집합과 합집합을 구한다
 * 교집합의 길이, 합집합의 길이를 이용하여 자카드 유사드(J(A,B))의 값을 구하면 된다
 **/'''

def solution(str1, str2):
    # 문자열을 모두 대문자로 변경
    str1 = str1.upper()
    str2 = str2.upper()
    
    # 다중집합의 원소로 만들기
    str1_arr = []
    str2_arr = []
    for idx in range(0, len(str1)-1):
        if str1[idx].isalpha() and str1[idx+1].isalpha():
            str1_arr.append(str1[idx:idx+2])
    for idx in range(0, len(str2)-1):
        if str2[idx].isalpha() and str2[idx+1].isalpha():
            str2_arr.append(str2[idx:idx+2])
            
    # 합집합, 교집합 구하기
    union = []
    intersection = []
    for chk in str1_arr:
        if chk in str2_arr:
            idx = str2_arr.index(chk)
            str2_arr = str2_arr[:idx] + str2_arr[idx+1:]
            intersection.append(chk)
        union.append(chk)
    union += str2_arr
    
    # J(A,B) = 교집합 크기 / 합집합 크기
    if len(union) == 0:
        return 1 * 65536
    else:
        return int((len(intersection) / len(union)) * 65536)