import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form'
import { RHFInput } from 'react-hook-form-input';
import { postDataAxios } from '../Connectivity/FetchServices';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const { register,handleSubmit,setValue } =useForm()
  const classes = useStyles();

  useEffect(()=>{
    if(!localStorage.getItem('@USER')){

    }
    else{
      props.history.replace({pathname:'/Dashboard'})
    }
  },)

   const onSubmit=async(data)=>{
    console.log(data)
    let result=await postDataAxios('user/checklogin',data)
    console.log(result)
    if(result){
      localStorage.setItem('@USER',JSON.stringify(result))
      props.history.replace({pathname:'/Dashboard'})
    }
    else{
      alert("not found")
    }
    
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RHFInput
              register={register}
              as={<TextField variant="outlined" required type="email" label="Email"
              autoFocus fullWidth/>}
              name="email"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12}>
            <RHFInput
              register={register}
              as={<TextField variant="outlined" required type="password" label="Password"
              autoFocus fullWidth/>}
              name="password"
              setValue={setValue}
            />
            </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          
        </form>
        <Grid container>
            <Grid item xs>
              <Link  variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={()=>props.history.push({pathname:'/SignUp'})} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}