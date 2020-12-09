import HomeIcon from "@material-ui/icons/Home";
import HomeNoneIcon from "@material-ui/icons/HomeOutlined";
import MessageIcon from "@material-ui/icons/Message";
import MessageNoneIcon from "@material-ui/icons/MessageOutlined";
import NotificationIcon from "@material-ui/icons/Notifications";
import NotificationNoneIcon from "@material-ui/icons/NotificationsOutlined";
import React from "react";

export const tabData = ({icon, selected}) => {
    return (
        <span>
            {(icon === 'home') ?
                <span style={{display: 'flex', alignContent: 'baseline'}}>
                    {(selected) ?
                        <HomeIcon style={{marginRight: 10}}/> :
                        <HomeNoneIcon style={{marginRight: 10}}/>} Home</span> :
                (icon === 'chat') ?
                    <span style={{display: 'flex', alignContent: 'baseline'}}>
                        {(selected) ?
                            <MessageIcon style={{marginRight: 10}}/> :
                            <MessageNoneIcon style={{marginRight: 10}}/>} Chat</span> :
                    <span style={{display: 'flex', alignContent: 'baseline'}}>
                        {(selected) ?
                            <NotificationIcon style={{marginRight: 10}}/> :
                            <NotificationNoneIcon style={{marginRight: 10}}/>} Notifications </span>}
                </span>
    );
}
