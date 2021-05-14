'''/**
* ABOUT
*
* DATE: 2021-05-14
* AUTHOR: lovelysi0113
*
* URL: https://programmers.co.kr/learn/courses/30/lessons/77885
*
* COMMENT:
* 양의 정수 x를 2진법 수로 변환한 후 우선 뒤 2자리를 확인한다
* '00', '01', '10' 으로 끝나는 x는 
* x+1이 x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수가 된다
* '11' 으로 끝나는 x는 다른 방식으로 찾아야 한다
* 예로 들어 x가 '1011'이면 f(x)는 '1101'이다
* 즉, 뒤에서 가장 먼저 등장하는 '01'을 '10'으로 변경하면 답을 구할 수 있다
**/'''


def solution(numbers):
    answer = []
    for num in numbers:
        bin_num = format(num, 'b')
        if bin_num[-2:] == '11':
            if '0' not in bin_num:
                bin_num = '10' + bin_num[1:]
            else:
                for idx in range(len(bin_num)-1, -1, -1):
                    if bin_num[idx] == '0':
                        bin_num = bin_num[0:idx] + '10' + bin_num[idx+2:]
                        break
            answer.append(int(bin_num, 2))
        else:
            answer.append(num+1)
    return answer
