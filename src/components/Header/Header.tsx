import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void

}
const Header: React.FC<PropsType> = (props) => {
    return <header className={classes.header}>
        <img src='https://store-fit.nethouse.ru/static/img/0000/0008/4990/84990387.39nh48juwd.W215.png' alt='test' />
        {props.isAuth ? <div>{props.login} ---- <button onClick={props.logout}>Logout</button></div>
            : <div className={classes.login} >
                <NavLink to={'/login'} >Login</NavLink>
            </div>}

    </header>
}

export default Header;