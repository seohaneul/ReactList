import React from 'react'
import Button from '../../components/Button'
import * as S from './styled'
import { v4 as uuidv4 } from 'uuid';

function index() {
    let data = {
        "title": "React list 구현",
        "data": [
            {
                "id": 1,
                "name": '권준',
                "level": 2
            },
            {
                "id": 2,
                "name": '김규민',
                "level": 1
            },
            {
                "id": 3,
                "name": '김민찬',
                "level": 5
            },
            {
                "id": 4,
                "name": '문찬영',
                "level": 4
            },
            {
                "id": 5,
                "name": '박신호',
                "level": 2
            },
            {
                "id": 6,
                "name": '박종혁',
                "level": 5
            },
            {
                "id": 7,
                "name": '박현우',
                "level": 1
            },
            {
                "id": 8,
                "name": '서하늘',
                "level": 4
            },
            {
                "id": 9,
                "name": '이재원',
                "level": 4
            },
            {
                "id": 10,
                "name": '임준건',
                "level": 5
            },
            {
                "id": 11,
                "name": '장민우',
                "level": 5
            },
            {
                "id": 12,
                "name": '전민수',
                "level": 2
            },
            {
                "id": 13,
                "name": '전찬하',
                "level": 2
            },
            {
                "id": 14,
                "name": '정민건',
                "level": 1
            },
            {
                "id": 15,
                "name": '정유권',
                "level": 5
            },
            {
                "id": 16,
                "name": '조수빈',
                "level": 3
            },
            {
                "id": 17,
                "name": '하승수',
                "level": 5
            },
            {
                "id": 18,
                "name": '박형진',
                "level": undefined
            },
        ]
    }
    
    let dataList = data.data.map(item => {
        return <S.list key={uuidv4()}><p>{item.name}</p><p>{item.level}</p></S.list>
    })
    const idUp = () =>{
        data = data.data.sort((a,b) => (a.id - b.id));
        console.log(data)
    }
    const idDown = () => {

    }
    const levelUp = () =>{
        data = data.data.sort((a,b) => (a.level - b.level));
        console.log(data)
    }
    const nameUp = () => {

    }
    const nameDown = () => {

    }

    return (
        <>
        <S.title>
            {data.title}
        </S.title>
        <S.ul>
            <li>name</li>
            <li>level</li>
        </S.ul>
        <hr />
        <div>
            {dataList}
        </div>


        <Button onClick={idUp}>id 오름차순</Button>
        <Button onClick={idDown}>id 내림차순</Button>
        <Button onClick={levelUp}>level 오름차순</Button>
        <Button onClick={nameUp}>이름 오름차순</Button>
        <Button onClick={nameDown}>이름 내림차순</Button>
        </>
    )
}

export default index;