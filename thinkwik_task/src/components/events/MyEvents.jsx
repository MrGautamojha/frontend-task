import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {  Typography } from '@material-ui/core';

import {  postDataAxios } from '../Connectivity/FetchServices'


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
    const user=JSON.parse(localStorage.getItem('@USER'))
    let body={_id:user._id}
    console.log(body)
    let result=await postDataAxios('event/displayallbyuser',body)
    console.log(result)
    setList(result)
  }
   

  React.useEffect(()=>{
    readAllRecords()
  },[])


   
   


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
        </Card>
        
      )})}
    </div>
  );
}
