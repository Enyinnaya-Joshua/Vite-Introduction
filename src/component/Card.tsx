import React from 'react'
import styled from 'styled-components'
import { iCard } from '../types' 
import Button from './Button'
import Input from './Input'

const Card: React.FC<iCard> = ({title, request, sign, ButtonTitle, onClick}) => {
  return (
    <CardContainer>
        <Text>{title}</Text>
        <Input  
        
        inputTitle1='email'
        inputTitle2='password'
        request={request}
        sign={sign}
        inputTitle='OTP'/>
        

        <Button onClick={onClick}   buttonTitle={ButtonTitle} bg='blue' c='white'/>

        
    </CardContainer>
  )
}

export default Card




const Text = styled.div`
margin-top: 40px;
font-weight: 600;
text-transform: uppercase;
font-size: 40px;
color: black;
`


const CardContainer = styled.div`
    width: 500px;
    min-height: 600px;
    border-radius: 8px;
    border: 1px solid silver;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: blue; */
`
