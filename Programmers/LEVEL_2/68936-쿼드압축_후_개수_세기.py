'''/**
 * ABOUT
 * DATE: 2021-06-23
 * AUTHOR: lovelysi0113
 *
 * URL: https://programmers.co.kr/learn/courses/30/lessons/68936
 *
 * COMMENT:
 * 압축을 다음과 같은 방식으로 진행한다
 * 1. 영역 안의 숫자들의 합을 구한다
 * 2. 모든 수가 같은 값이다 = 0일때 합은 0이 나옴, 1일때 합은 영역 넓이가 나옴 -> 압축 종료
 * 3. 그렇지 않다 -> 영역을 4등분하여 1~3 과정 진행
 * 4. 만약 영역의 넓이가 1이라면 압축 종료
 **/'''

def solution(arr):
    # 압축 후 남는 0의 개수, 1의 개수
    answer = [0, 0]
    
    # arr을 압축하는 함수
    def compress(arr, length):
        num = arr[0][0]
        # 길이가 1이면 더이상 압축할 필요 없음
        if length == 1:
            answer[num] += 1
            return
        # 압축 진행(현재 영역의 모든 수의 합을 구함)
        total = sum([sum(arr[idx]) for idx in range(length)])
        if total == 0 or total == length * length:
            # 압축 성공
            answer[num] += 1
            return
        # 압축 실패 -> 영역을 4등분하기
        new_len = length // 2
        new_arr1 = [arr[idx][:new_len] for idx in range(0, new_len)]
        new_arr2 = [arr[idx][new_len:] for idx in range(0, new_len)]
        new_arr3 = [arr[idx][:new_len] for idx in range(new_len, length)]
        new_arr4 = [arr[idx][new_len:] for idx in range(new_len, length)]
        # 4등분한 영역에 대해 다시 압축 진행
        compress(new_arr1, new_len)
        compress(new_arr2, new_len)
        compress(new_arr3, new_len)
        compress(new_arr4, new_len)
    
    compress(arr, len(arr))
    
    return answer