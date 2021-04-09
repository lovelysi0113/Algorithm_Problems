-- 보호소에 들어올 당시에는 중성화되지 않았지만,
-- 보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종, 이름을 조회

SELECT outs.ANIMAL_ID, outs.ANIMAL_TYPE, outs.NAME
FROM ANIMAL_OUTS AS outs
LEFT JOIN ANIMAL_INS AS ins 
ON outs.ANIMAL_ID = ins.ANIMAL_ID
WHERE (ins.SEX_UPON_INTAKE = 'Intact Male'
        AND outs.SEX_UPON_OUTCOME = 'Neutered Male')
    OR (ins.SEX_UPON_INTAKE = 'Intact Female'
        AND outs.SEX_UPON_OUTCOME = 'Spayed Female');