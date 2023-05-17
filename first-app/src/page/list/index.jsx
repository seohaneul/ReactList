import { useState } from 'react'
import Button from '../../components/Button'
import * as S from './styled'
import { memberList } from '../../contants/member_list'

function List() {
    const [list, setList] = useState(memberList);

    
    const idUp = () =>{
        setList(prevState => {
            return[...prevState].sort((a,b) => a.id - b.id);
        });
    }
    const idDown = () => {
        setList(prevState => {
            return[...prevState].sort((a,b) => b.id - a.id);
        });
    }
    const levelUp = () =>{
        setList(prevState => {
            return[...prevState].sort((a,b) => {
            if( a.level === undefined){
                return -1;
            }
            return a.level < b.level ? -1 : 1;
        })});
    }
    const nameUp = () => {
        setList(prevState => {
            return[...prevState].sort((a,b) => a.name > b.name ? 1 : -1);
        });
    }
    const nameDown = () => {
        setList(prevState => {
            return[...prevState].sort((a,b) => b.name > a.name ? 1 : -1);
        });
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
            {list.map(({ id, name, level }) => {
                return(
                    <ul key={id}>
                        <S.Desc>{id}</S.Desc>
                        <S.Desc>{name}</S.Desc>
                        <S.Desc>{level}</S.Desc>
                    </ul>
                ) 
            })}
        </S.List>


        <Button onClick={idUp}>id 오름차순</Button>
        <Button onClick={idDown}>id 내림차순</Button>
        <Button onClick={levelUp}>level 오름차순</Button>
        <Button onClick={nameUp}>이름 오름차순</Button>
        <Button onClick={nameDown}>이름 내림차순</Button>
        </>
    )
}

export default List;