import React from 'react'
import styled from 'styled-components'
import { iCard } from '../types' 
import Button from './Button'
import Input from './Input'
import { Link } from 'react-router-dom'

const Card: React.FC<iCard> = ({title, request, path, text, route, sign, ButtonTitle, onClick}) => {
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

        
        <Content>
            {text}<Span to={`${path}`}>{route}</Span>
        </Content>
    </CardContainer>
  )
}

export default Card

const Span = styled(Link)`
margin-left: 5px;
font-weight: bolder;
transition: all 960ms;
text-decoration: none;
:hover{

}
`
const Content = styled.div``

const Text = styled.div`
margin-top: 40px;
font-weight: 600;
text-transform: uppercase;
font-size: 40px;
color: black;
`


const CardContainer = styled.div`
    width: 500px;
    min-height: 400px;
    /* height: auto; */
    /* padding: 50px 0px; */
    border-radius: 8px;
    border: 1px solid silver;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: blue; */
`
