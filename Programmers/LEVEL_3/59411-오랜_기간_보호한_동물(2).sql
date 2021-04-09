-- 입양을 간 동물 중, 보호 기간이 가장 길었던 동물 두 마리의 아이디와 이름을 조회

SELECT outs.ANIMAL_ID, outs.NAME
FROM ANIMAL_OUTS AS outs
LEFT JOIN ANIMAL_INS AS ins
ON outs.ANIMAL_ID = ins.ANIMAL_ID
ORDER BY outs.DATETIME - ins.DATETIME DESC
LIMIT 2;