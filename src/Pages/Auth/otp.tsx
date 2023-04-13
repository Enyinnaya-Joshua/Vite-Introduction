import React from 'react'
import styled from 'styled-components';
import Card from '../../component/Card';

const OTP = () => {
  return (
    <div>
      <Main>
        <Card sign={false} request={false} title='OTP' ButtonTitle='continue'
        
        onClick={()=>{
            console.log("i am");
            
        }}
        />
      </Main>
    </div>
  )
}

export default OTP;


const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
`
