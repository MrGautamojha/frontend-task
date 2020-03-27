import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { postDataAxios } from '../Connectivity/FetchServices'


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

export default function EditProfile(props) {
    const [id,setId]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [birthdate,setBirthdate]=useState('')
    const [gender,setgender]=useState('')
    const [email,setEmail]=useState('')

  const classes = useStyles();
  const onSubmit=async()=>{
      let body={
          id:id,firstname:firstName,lastname:lastName,birthdate:birthdate,gender:gender
      }
    let result=await postDataAxios('user/updateuser',body)
    console.log(result)
    if(result){
      alert("true")
      localStorage.setItem('@USER',JSON.stringify(result))
    //   props.history.push({pathname:'/SignIn'})
    setInputs()
    }
    else
    alert("false")

  }

  const setInputs=()=>{
    const user=JSON.parse(localStorage.getItem('@USER'))
    console.log(user)
    setId(user._id)
    setFirstName(user.firstname)
    setLastName(user.lastname)
    setEmail(user.email)
    setBirthdate(user.birthdate)
    setgender(user.gender)
  }

  useEffect(()=>{
    setInputs()
  },[])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Profile
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField 
            variant="outlined" 
            required 
            label="First Name"
            autoFocus 
            onChange={(e)=>setFirstName(e.target.value)}
            value={firstName}
            fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField 
            variant="outlined" 
            required 
            label="Last Name"
            autoFocus 
            onChange={(e)=>setLastName(e.target.value)}
            value={lastName}
            fullWidth/>
            </Grid>
            <Grid  item xs={12} >
            <TextField 
                variant="outlined" 
                required 
                label="Birth Date"
                autoFocus 
                type="date"
                onChange={(e)=>setBirthdate(e.target.value)}
                value={birthdate}
                fullWidth/>
            </Grid>
            <Grid item xs={12} >
                <FormControl component="fieldset">
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup row aria-label="position" value={gender} onChange={(e)=>setgender(e.target.value)} name="position" defaultValue="top"><FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" /></RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField 
            variant="outlined" 
            required 
            label="Email"
            autoFocus 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            InputProps={{
                readOnly: true,
              }}
            fullWidth/>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>onSubmit()}
            className={classes.submit}
          >
            Edit Profile
          </Button>
          
      </div>
    </Container>
  );
}