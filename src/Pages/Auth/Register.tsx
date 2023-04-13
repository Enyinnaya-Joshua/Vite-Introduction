import React from 'react'
import styled from 'styled-components';
import Card from '../../component/Card';

const Register = () => {
  return (
    <div>
      <Main>
        <Card sign={true} request={false} title='Register' ButtonTitle='Sign up'
        
        onClick={()=>{
            console.log("i am");
            
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
