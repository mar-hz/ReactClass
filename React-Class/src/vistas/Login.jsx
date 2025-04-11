import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import React from 'react'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={onsubmit}>
      <Box
        margin ={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
      >
        <TextField label={"Username"} value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField type={"password"} label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type={"submit"} variant="contained" onSubmit={onsubmit}>
          Login
        </Button>
      </Box>
    </form>
  )
}

export default Login