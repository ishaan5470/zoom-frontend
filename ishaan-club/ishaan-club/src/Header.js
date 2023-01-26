import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { Avatar } from '@mui/material';
import "./Header.css";
import {Link, Route} from 'react-router-dom';
import { Icon, IconButton } from "@mui/material";



function Header() {
  return (
    <div className='header'>
        <Link exact to="/explore">
        <SearchIcon fontSize='large' className='Search'/> </Link> 
        <div className='icons'>
            <Link exact to="/friendinvite">
        <MarkEmailUnreadIcon className='mail' fontSize='large'/></Link>
        
        <CalendarMonthIcon className='calender' fontSize='large'/>
        <NotificationAddIcon className='noti'fontSize='large'/>
        <Avatar src="IshaanSaraswat2.jpg"/>
        </div>
    </div>
  )
}

export default Header