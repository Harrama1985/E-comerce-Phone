import React from 'react'
import Imglogo from '../../assets/logo.svg'
import classes from './Logo.module.css'
function Logo() {
    return (
    <div className={classes.Logo}>
        <img src={Imglogo} alt='logo'/>
    </div>
    )
}

export default Logo
