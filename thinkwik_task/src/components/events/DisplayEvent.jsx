import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {  Typography } from '@material-ui/core';

import { getDataAxios, postDataAxios } from '../Connectivity/FetchServices'


const useStyles = makeStyles(theme => ({
    paper:{padding:'30px',marginTop:'10px',marginBottom:'10px'},
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    root:{
      display:'flex',
      flexWrap:'wrap',
      padding:'10px',
      marginTop:50
     
      
  
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      rightIcon: {
        marginLeft: theme.spacing(1),
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
      card: {
        maxWidth: 345,
        marginRight:'4%',
        marginTop:'4%'
      },
      media: {
        height:'300px',
    width:'275px'
      },    
  }));
export default function DisplayPost(props) {
  const classes = useStyles();
   const [getList,setList]=React.useState([])

  const readAllRecords=async()=>{
    let result=await getDataAxios('event/displayall')
    console.log(result)
    setList(result)
  }
   

  React.useEffect(()=>{
    readAllRecords()
  },[])

  const user=JSON.parse(localStorage.getItem('@USER'))
  const joinEvent=async(id)=>{

    let body={
        eventid:id,
        userid:user._id
    }
    console.log(body)
    let result=await postDataAxios('event/eventjoin',body)
    if(result){
        alert("Joined Successfully")
    }
    else{
        alert("Server Error...")
    }
  }

   
   


  return (<div className={classes.root}>
      {getList.map((item,index)=>{return(
          <Card className={classes.card}>
          <CardActionArea>
           
            <CardContent>
              <Typography style={{textDecorationLine:item.status==='complete'?'line-through':null}} gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{textDecorationLine:item.status==='complete'?'line-through':null}} component="p">
                {item.description}<br/>
                Date & Time: {item.date} {item.time}<br/>
                Venue: {item.place}<br/>
                No. of Seats: {item.participantsno}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Button onClick={()=>joinEvent(item._id)} size="large" color="primary">
              Join
            </Button>
          </CardActions>
        </Card>
        
      )})}
    </div>
  );
}
