'''/**
 * ABOUT
 *
 * DATE: 2021-06-14
 * AUTHOR: lovelysi0113
 *
 * URL: https://www.acmicpc.net/problem/10974
 *
 * COMMENT:
 * 조합과 비슷한 방식이다
 * 다만 조합과 다른 점은 순열은 현재 선택한 숫자를 제외한 나머지 모든 수에서 N-1개의 조합을 구해 합친다는 것이다
 * 재귀를 사용하여 한 개만 선택해야하는 경우 이외에는 하나씩 숫자를 선택하고 나머지 수에서 다시 조합을 구하는 것을 반복하면 된다
 **/'''

# 순열을 구현한 함수
def permutation(num_list, select):
    results = []
    if select == 1:
        for num in num_list:
            results.append([num])
        return results
    for idx, num in enumerate(num_list):
        # 현재 선택한 수(num)를 제외한 배열에서 다음 수를 고르기(조합으로 볼 수 있음)
        rest = num_list[:idx] + num_list[idx+1:]
        perm_arr = permutation(rest, select - 1)
        # num을 제외한 배열로 구한 조합(perm_arr)에 현재 수(num) 추가하기
        perm_result = []
        for perm in perm_arr:
            perm_result.append([num] + perm)
        # results에 넣기
        results += perm_result
    return results

N = int(input())
# 1 ~ N까지 자연수 리스트
numbers = [idx for idx in range(1, N+1)]

result = permutation(numbers, N)
for res in result:
    print(' '.join(map(str, res)))