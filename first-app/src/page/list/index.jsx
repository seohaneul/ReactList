import {useState} from 'react'
import Button from '../../components/Button'
import * as S from './styled'
import { memberList } from '../../contants/member_list'

function Index() {
    const [list, setList] = useState(memberList);

    
    const idUp = () =>{
    }
    const idDown = () => {
        
    }
    const levelUp = () =>{
        
    }
    const nameUp = () => {

    }
    const nameDown = () => {

    }

    return (
        <>
        <S.title>
        </S.title>
        <S.ul>
            <li>id</li>
            <li>name</li>
            <li>level</li>
        </S.ul>
        <hr />
        <S.List>
            {memberList.map(({ id, name, level }) => {
                return(
                    <ul key={id}>
                        <S.Desc>{id}</S.Desc>
                        <S.Desc>{name}</S.Desc>
                        <S.Desc>{level}</S.Desc>
                    </ul>
                ) 
            })};
        </S.List>


        <Button onClick={idUp}>id 오름차순</Button>
        <Button onClick={idDown}>id 내림차순</Button>
        <Button onClick={levelUp}>level 오름차순</Button>
        <Button onClick={nameUp}>이름 오름차순</Button>
        <Button onClick={nameDown}>이름 내림차순</Button>
        </>
    )
}

export default Index;