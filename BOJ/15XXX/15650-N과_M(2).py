'''/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/15650
 *
 * COMMENT:
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열, 즉 M개를 선택할 때 나올 수 있는 모든 조합을 구해야하는 문제이다
 * 이때 조합의 순서는 오름차순으로 정렬해야 한다
 * 여기서 포인트는 현재 선택한 숫자를 제외한 나머지 수(오른쪽 부분)에서 M-1개의 조합을 구해 합친다는 것이다
 * 재귀를 사용하여 한 개만 선택해야하는 경우 이외에는 하나씩 숫자를 선택하고 나머지 수에서 다시 조합을 구하는 것을 반복하면 된다
 **/'''

# M개를 고르는 조합을 구현한 함수
def combination(num_list, select):
    results = []
    if select == 1:
        for num in num_list:
            results.append([num])
        return results
    for idx, num in enumerate(num_list):
        # 현재 선택한 수(num) 이후의 배열(나머지)에서 다음 수를 고르기(조합)
        rest = num_list[idx+1:]
        comb_arr = combination(rest, select - 1)
        # 나머지로 구한 조합(comb_arr)에 현재 수(num) 추가하기
        comb_result = []
        for comb in comb_arr:
            comb_result.append([num] + comb)
        # results에 넣기
        results += comb_result
    return results
    

N, M = map(int, input().split(' '))

# 1 ~ N까지 자연수 리스트
numbers = [idx for idx in range(1, N+1)]

result = combination(numbers, M)
for res in result:
    print(' '.join(map(str, res)))