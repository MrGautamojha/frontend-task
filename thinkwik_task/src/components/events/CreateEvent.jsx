import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form'
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RHFInput } from 'react-hook-form-input';

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

export default function CreateEvent(props) {
  const { register,handleSubmit,setValue } =useForm()
  const classes = useStyles();
  const user=JSON.parse(localStorage.getItem('@USER'))
  const onSubmit=async(data)=>{
    console.log(data)
    let body={addedby:user._id,title:data.title,description:data.description,date: data.birthdate,
    time:data.time,
    place: data.place,
    participants: data.participants,
    participantsno: data.participantsno}
    console.log(body)
    let result=await postDataAxios('event/addnewevent',body)
    console.log(result)
    if(result){
      alert("true")
    //   props.changeView(<DisplayEvent/>)
    }
    else
    alert("false")

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography style={{marginTop:20}} component="h1" variant="h5">
          Create Event
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <RHFInput
              register={register({required:true})}
              as={<TextField variant="outlined" required label="Title"
              autoFocus fullWidth/>}
              name="title"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12}>
            <RHFInput
              register={register({required:true})}
              as={<TextField
                id="outlined-multiline-static"
                label="Description"
                multiline required
                rows="4"
                fullWidth autoFocus
                variant="outlined"
              />}
              name="description"
              setValue={setValue}
            />
            </Grid>
            <Grid  item xs={12} >
                <RHFInput
                register={register({required:true})}
                as={<TextField variant="outlined"  type="date"
                required
                label="Date of Birth"
                autoFocus fullWidth />}
                name="birthdate"
                defaultValue="2020-03-27"
                setValue={setValue}
                />
            </Grid>
            <Grid  item xs={12} >
                <RHFInput
                register={register({required:true})}
                as={<TextField variant="outlined"  type="time"
                required
                label="Date of Birth"
                autoFocus fullWidth />}
                name="time"
                defaultValue="12:00"
                setValue={setValue}
                />
            </Grid>
            <Grid item xs={12} >
            <RHFInput
              register={register({required:true})}
              as={<TextField variant="outlined" required type="email" label="Place"
              autoFocus fullWidth/>}
              name="place"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12}>
            <RHFInput
              register={register({required:true})}
              as={<TextField
                id="outlined-multiline-static"
                label="Participants"
                multiline required
                rows="4"
                fullWidth autoFocus
                variant="outlined"
              />}
              name="participants"
              setValue={setValue}
            />
            </Grid>
            <Grid item xs={12}>
            <RHFInput
              register={register({required:true})}
              as={<TextField variant="outlined" type="number" required label="Maximum Participants Allowed"
              autoFocus fullWidth/>}
              name="participantsno"
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
            Create Event
          </Button>
          
        </form>
      </div>
    </Container>
  );
}