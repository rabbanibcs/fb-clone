import React from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

export default function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="sorry" />
                <div className="header__input">
                    <SearchIcon color='secondary'/>
                    <input placeholder='Search Facebook'  type="text" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize='large'/>                    
                </div>
                <div className="header__option">
                    <FlagIcon fontSize='large'/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon  fontSize='large'/>
                </div>
                <div className="header__option">
                    <StorefrontIcon  fontSize='large'/>
                </div>
                <div className="header__option">                    
                    <PeopleIcon  fontSize='large'/>
                </div>
                
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>Rabbani</h4> 
                </div>
                <IconButton><AppsIcon /></IconButton>
                <IconButton><ChatIcon/></IconButton>
                <IconButton><NotificationsIcon/></IconButton>
                <IconButton><ArrowDropDownIcon/></IconButton>
            </div>
        </div>
    )
}
