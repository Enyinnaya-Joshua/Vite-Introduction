import React from 'react'
import styled from 'styled-components'
import { iButton } from '../types'



const Button: React.FC<iButton> = ({buttonTitle, bg, c, onClick}) => {
  return (
    <Main bg={bg} c={c} onClick={onClick}>
        <Text>{buttonTitle}</Text>
    </Main>
  )
}

export default Button;

const Text = styled.div`
font-weight: bold;

`

const Main = styled.div<{bg: string; c: string}>`
    width: 120px;
    height: 50px;
    background-color: ${({bg})=>bg};
    color: ${({c})=>c};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
        transition: all 390ms;
        transform: scale(1.03);
    }
`
