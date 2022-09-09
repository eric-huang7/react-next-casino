import dynamic from 'next/dynamic';
import { chakra } from '@chakra-ui/react';
import {Box} from "@chakra-ui/layout";

const ReactCodeInput = dynamic(import('react-code-input'));

export const TwoFaCodeInput = ({error, handleChange, codeRef}) => (
  <Box w="100%" p={{base: "0 10px", lg: "0 20px"}}>
    <chakra.form w="100%" display="flex" alignItems="center" justifyContent="center">
      <ReactCodeInput
        inputMode={"numeric"}
        type='number'
        fields={6}
        autoFocus={true}
        onChange={handleChange}
        ref={codeRef}
        isValid={!error}
        inputStyle={{
          fontFamily: 'Segoe UI',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '55px',
          borderRadius: '7px',
          fontSize: '30px',
          height: '55px',
          paddingLeft: '5px',
          backgroundColor: '#f2f6f9',
          color: '#707070',
          textAlign: 'center',
          border: '1px solid #b5b7b8'
        }}
        inputStyleInvalid={{
          fontFamily: 'Segoe UI',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '55px',
          borderRadius: '7px',
          fontSize: '30px',
          height: '55px',
          paddingLeft: '5px',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          color: 'red',
          textAlign: 'center',
          border: '1px solid red'
        }}
      />
    </chakra.form>
  </Box>
)
