import React from 'react';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { postDataAxios } from '../Connectivity/FetchServices'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const { register,handleSubmit,setValue } =useForm()
  const classes = useStyles();
  const onSubmit=async(data)=>{
    console.log(data)
    let result=await postDataAxios('user/addnewuser',data)
    console.log(result)
    if(result){
      alert("true")
      props.history.push({pathname:'/SignIn'})
    }
    else
    alert("false")

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <RHFInput
              register={register}
              as={<TextField variant="outlined" required label="First Name"
              autoFocus fullWidth/>}
              name="firstname"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <RHFInput
              register={register}
              as={<TextField variant="outlined" required label="Last Name"
              autoFocus fullWidth/>}
              name="lastname"
              setValue={setValue}
            />
            </Grid>
            <Grid  item xs={12} >
            <RHFInput
              register={register}
              as={<TextField variant="outlined"  type="date"
              required
              label="Date of Birth"
              autoFocus fullWidth />}
              name="birthdate"
              defaultValue="2017-05-24"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12} >
              <RHFInput
                      register={register}
                      as={<FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup row aria-label="position" name="position" defaultValue="top"><FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" /><FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" /></RadioGroup>
                      </FormControl>}
                      name="gender"
                      setValue={setValue}
              />
            </Grid>
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
            Sign Up
          </Button>
          
        </form>
        <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={()=>props.history.push({pathname:'/SignIn'})} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}