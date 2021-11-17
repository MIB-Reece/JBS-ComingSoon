import { useState } from 'react'
import axios from 'axios'
import { 
  Grid, CssBaseline, Box, Button
} from '@mui/material'

export default function EmailSignUp (){
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async ()=>{
    setState("LOADING");
    setErrorMsg(null);
    try{
      const response = await axios.post("/api/newsletter", {email})
      setState("VALID")
    } catch(e){
      setErrorMsg(e.response.data.error);
      setState("ERROR");
    }
  }

  return (

  );
}