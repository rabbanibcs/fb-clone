import React,{useEffect} from 'react'
import './css/SideBar.css'
import SideBarRow from './SideBarRow'
import GroupIcon from '@material-ui/icons/Group';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ChatIcon from '@material-ui/icons/Chat';
import StarIcon from '@material-ui/icons/Star';
export default function SideBar(props) {

    
    return (
        <div className='sidebar'>
            <SideBarRow src='https://lh3.googleusercontent.com/ogw/ADea4I4Olu7qHciiOvYjjpqMRdMMIVxv10CZ3kZXYTfXzw=s83-c-mo' title='Rabbani'/>

            <SideBarRow Icon={GroupIcon} title='Friends'/>
            <SideBarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SideBarRow Icon={SubscriptionsIcon} title='Watch'/>
            <SideBarRow Icon={FlagIcon} title='Pages'/>
            <SideBarRow Icon={ChatIcon} title='Messenger'/>
            <SideBarRow Icon={StarIcon} title='Favorites'/>

        </div>
    )
}
