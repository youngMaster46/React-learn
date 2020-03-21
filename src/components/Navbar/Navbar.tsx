import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
type PropsType = {
}
const Navbar: React.FC<PropsType> = (props) => {
  
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLinkBagda}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.activeLinkBagda}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.activeLinkBagda}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={classes.item + ' ' + classes.users }>
                <NavLink to='/users'>List of Users</NavLink>
            </div>
            <div className={classes.friends}>
                Friends: 
            </div>
        </nav>
    )
} 

export default Navbar;