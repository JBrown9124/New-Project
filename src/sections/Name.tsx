import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import FeelSafeTransition from "../animators/FeelSafeTransition";
import Container from "react-bootstrap/Container"
import FeelSafeButton from "../components/FeelSafeButton"

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});


interface Props {
  handleName: (props:string)=>void;
  
}

export default function Name({handleName}:Props) {

 
  const[name, setName]= useState("")
  const handleSubmit = ():void => {
handleName(name)

  }


  return (
    <>
     
     <Container className="feelSafeContainer">
          <Typography variant="h3">
           What would you like to be called for this session?
          </Typography>
          <CssTextField label="Custom CSS" id="custom-css-outlined-input" value={name} onChange={(e)=>setName(e.target.value)}/>
     
         <FeelSafeButton onClick={()=>handleSubmit()} message={'Continue'}/>
        </Container>


    </>
  )
}