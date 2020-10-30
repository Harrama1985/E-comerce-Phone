import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Button from '../UI/Button/Button'
import classes from './Toolbar.module.css'
class Toolbar extends Component {
    render() {
        return (
            <div className={classes.Toolbar}>
                
                <Link to='/'>
                    <Logo />
                </Link>
                <NavigationItems />
                <Link to='/cart'>
                    <Button type='Blue'><i className="fas fa-cart-arrow-down"/>Cart</Button>
                </Link>
            </div>
        )
    }
}

export default Toolbar
