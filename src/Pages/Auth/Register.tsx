import React from 'react'
import styled from 'styled-components';
import Card from '../../component/Card';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

  return (
    <div>
      <Main>
        <Card 
        sign={true} 
        request={true} 
        title='Register' 
        ButtonTitle='Sign up'
        text="Already have an account"
        route='Sign In'
        path='/sign-in'
        
        onClick={()=>{
        console.log("i am")
            
    }}
        />
      </Main>
    </div>
  )
}

export default Register;


const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
`
