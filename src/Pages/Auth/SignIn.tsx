import React from 'react'
import styled from 'styled-components';
import Card from '../../component/Card';

const SignIn = () => {
  return (
    <div>
      <Main>
        <Card sign={true} request={false} title='Sign in' ButtonTitle='Sign in' text="Don't have an account"
        route='Create One'
        path='/register'
        
        onClick={()=>{
            console.log("i am");
            
        }}
        />
      </Main>
    </div>
  )
}

export default SignIn;


const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
`
