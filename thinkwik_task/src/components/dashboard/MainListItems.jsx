import React from 'react';
import {makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Planner from '../Planner';
// import Investor from '../Investor'
// import Feedback from '../Feedback'
// import Community from '../Community'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EditProfile from '../user/EditProfile'
import CreateEvent from '../events/CreateEvent'
import DisplayEvent from '../events/DisplayEvent';
import MyEvents from '../events/MyEvents';
import EventJoin from '../events/EventJoin';


const useStyles = makeStyles(theme => ({
  
  iconColor:{
    //  color:'rgb(250,250,250)' 
  },
  ListItem:{
    //  backgroundImage: 'linear-gradient(45deg, #2979ff, transparent)', 
    // "&:hover":{
    //   backgroundImage:'linear-gradient(45deg, blue, transparent)'
    // }
   },
}))


export default function MainListItems(props){
  const classes=useStyles();
  
  
  const handleClick=(view)=>{
    props.changeView(view)
  }
const mainListItems = (
  <div>
    <ListItem button onClick={()=>handleClick(<CreateEvent changeView={props.changeView} />)} className={classes.ListItem}>
      <ListItemIcon  className={classes.iconColor}>
        <AccountBalanceIcon />
      </ListItemIcon >
      <ListItemText primary="Create Event" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<MyEvents/>)}  className={classes.ListItem}>
      <ListItemIcon className={classes.iconColor}>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="My Events" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<DisplayEvent/>)}  className={classes.ListItem}>
      <ListItemIcon  className={classes.iconColor}>
      <FeedbackIcon/>
      </ListItemIcon>
      <ListItemText primary="All Events" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<EventJoin/>)}  className={classes.ListItem}>
      <ListItemIcon  className={classes.iconColor}>
      <FeedbackIcon/>
      </ListItemIcon>
      <ListItemText primary="Events Join" />
    </ListItem>
    <ListItem button onClick={()=>handleClick(<EditProfile/>)}  className={classes.ListItem}>
      <ListItemIcon  className={classes.iconColor}>
        < ArtTrackIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Profile" />
    </ListItem>
    <ListItem button onClick={()=>handleClick('LOGOUT')}  className={classes.ListItem}>
      <ListItemIcon  className={classes.iconColor}>
        <ExitToAppIcon/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);


return(<div>
  {mainListItems}
</div>);
}