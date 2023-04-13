import React, { useState } from 'react'
import styled from 'styled-components'
import { iInput } from '../types'

const InputData: React.FC<iInput> = ({inputTitle, inputTitle1, inputTitle2, sign, request}) => {

    // const [sign, setSign] = useState(false)
    // const [request, setRequest] = useState(false)





  return (
    <Field>
            <Form>
                <Input placeholder={inputTitle}/>
                {
                    sign?                 <Input placeholder={inputTitle1} />: null

                }
                {
                    request?                 <Input placeholder={inputTitle2}/> :
                    null


                }
            </Form>
        </Field>
  )
}

export default InputData;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    /* margin-bottom: 10px; */

`

const Input = styled.input`
    border-radius: 4px;
    border: 1px solid gray;
    height: 50px;
    width: 100%;
    margin-bottom: 10px;

    padding-left: 10px;
`

const Form = styled.form`
    width: 100%;
`;
