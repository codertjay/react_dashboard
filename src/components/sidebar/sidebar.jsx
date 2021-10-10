import React from 'react';
import './sidebar.css'
import {
    Feedback,
    LineStyle,
    Mail,
    Message,
    Money,
    Report,
    Timeline,
    TrendingUp,
    VerifiedUser,
    WorkOutline
} from '@material-ui/icons'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Dashboard
                        <ul className="sidebarList">
                            <Link to={'/'} className={'link'}>
                                <li className="sidebarListItem">
                                    <LineStyle/>Home
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <Timeline/>Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp/>Sales
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Quick Menu
                        <ul className="sidebarList">
                            <Link to={'/users'} className={'link'}>
                                <li className="sidebarListItem">
                                    <VerifiedUser className='sidebarIcon'/>Users
                                </li>
                            </Link>
                            <Link to={'/products'} className={'link'}>
                                <li className="sidebarListItem">
                                    <Timeline className='sidebarIcon'/>Products
                                </li>
                            </Link>
                            <li className="sidebarListItem">
                                <Money className='sidebarIcon'/>Transactions
                            </li>
                            <li className="sidebarListItem">
                                <Report className='sidebarIcon'/>Reports
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Notifications
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <Mail className='sidebarIcon'/>Mail
                            </li>
                            <li className="sidebarListItem">
                                <Feedback className='sidebarIcon'/>Feedback
                            </li>
                            <li className="sidebarListItem">
                                <Message className='sidebarIcon'/>Messages
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Staff
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <WorkOutline className='sidebarIcon'/>Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className='sidebarIcon'/>Analytics
                            </li>
                            <li className="sidebarListItem">
                                <Report className='sidebarIcon'/>Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;