import React from 'react'
import Divider from '@mui/material/Divider';
import {Button, Container, Paper, TextField, Typography, Box, Stack, Avatar, IconButton} from "@mui/material";
import { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import {useFileHandler, useInputValidation} from "6pp";
import userNameValidator from "./Validator";



const LoginSignup = () => {

  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = ()=>setIsLogin(((pre) => !pre));
  const avatar = useFileHandler("single")

  const name = useInputValidation("");
  const status = useInputValidation("");
  const username = useInputValidation("",userNameValidator);
  const password = useInputValidation("");

  const loginHandler = (event)=>{
    event.preventDefault();

  };
  const signUpHandler = (event)=>{
    event.preventDefault();
    
  }
  
  return (
    <div className='containerBg'>
      <Container  component={"main"} maxWidth={"xs"} 
    
    sx={{height:"100vh",
      display:"flex" ,
      justifyContent:"center",
      alignItems:"center",
      

    }}>
      <Paper elevation={3}
      sx={{padding:2, display:"flex", 
      flexDirection:"column", alignItems:"center"}}>
      {
        isLogin ? <>
      <Stack direction={'row'} alignItems={'center'} spacing={-1}>
          <Box
            component="img"
            src="https://static.vecteezy.com/system/resources/thumbnails/021/919/677/small/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg"
            alt="LoginLogo"
            sx={{ width: "80px", height: "80px", cursor:"pointer"}}

          />
            <Typography variant='h4'>Login</Typography>
      </Stack>
        <form onSubmit={loginHandler}>
          <TextField required
            fullWidth
            margin='normal'
            variant='outlined'
            label="Username"
            value={username.value}
            onChange={username.changeHandler}
          ></TextField>

          <TextField required
             fullWidth
             margin='normal'
             variant='outlined'
             label="Password"
             type="password"
             value={password.value}
            onChange={password.changeHandler}
           ></TextField>

           <Button sx={{marginTop:"1rem"}}
           variant='contained'
           color='primary'
           type='submit'
           fullWidth
           >
            Login
           </Button>
           
           <Divider >OR</Divider>
           {/* <Typography textAlign={"center"} ></Typography> */}
            <Box display="flex" justifyContent="center" alignItems="center">
            <Typography display={"inline"}>Dont have an account?</Typography>
           <Button variant='text'
            margin="10"
            
           type='submit'
           onClick={toggleLogin}
           
           >
            <Typography>Sign in</Typography>
           </Button>
           </Box>
        </form>
        </>:<>
        <Typography variant='h4' >Sign Up</Typography>
        <form style={{
          
          width:"100%",
          marginTop:"1rem",
          
        }}onSubmit={signUpHandler}>
          <Stack position={"relative" } width={"10rem"} margin={"auto"}>
              <Avatar
                sx={{
                  width:"10rem",
                  height:"10rem",
                  objectFit:"contain",
                  ":hover":{bgcolor:"rgba(0,0,0,0.5)"}
                }}
                src={avatar.preview}
              />
              <IconButton sx={{
                  position:"absolute",
                  bottom:5,
                  right:0,
                  color:'white',
                  bgcolor:"rgba(0,0,0,0.5)",
                  ":hover":{bgcolor:"rgba(0,0,0,0.8)"}
                }} component="label">
                <>
                  <CameraAltIcon/>
                  {/* <HiddenInput type="file" onClick={avatar.changeHandler}/> */}
                </>
              </IconButton>
          </Stack>
          {
                Avatar.error &&(
                  <Typography m={"3rem"} variant='caption' color='error'>
                    {Avatar.error}
                  </Typography>
                )
              }
          <TextField required
            fullWidth
            margin='normal'
            variant='outlined'
            label="Name"
            value={name.value}
            onChange={name.changeHandler}
          ></TextField>
         <TextField required
            fullWidth
            margin='normal'
            variant='outlined'
            label="Status"
            value={status.value}
            onChange={status.changeHandler}
          ></TextField>
          <TextField required
            fullWidth
            margin='normal'
            variant='outlined'
            label="Username"
            value={username.value}
            onChange={username.changeHandler}
          ></TextField>
          {
            username.error &&(
              <Typography variant='caption' color='error'>
                {username.error}
              </Typography>
            )
          }

          <TextField required
             fullWidth
             margin='normal'
             variant='outlined'
             label="Password"
             type="password"
             value={password.value}
            onChange={password.changeHandler}
            ></TextField>
          

           <Button sx={{marginTop:"1rem"}}
           variant='contained'
           color='primary'
           type='submit'
           fullWidth
           >
            Sign Up
           </Button>

            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
            <Typography display={"inline"}>Already have an account?</Typography>
           <Button variant='text'
            margin="10"
            
           type='submit'
           onClick={toggleLogin}
           
           >
            <Typography >Login </Typography>
           </Button>
           </Box>
        </form>
      </>
      }
      </Paper>

    </Container>
    </div>
    
  )
}

export default LoginSignup