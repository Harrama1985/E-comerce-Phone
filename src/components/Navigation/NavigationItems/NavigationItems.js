import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems =(props)=>(
    <ul className={classes.NavigationItems}> 
        <NavigationItem link='/' exact>Products</NavigationItem>
        {/* <NavigationItem link='/Auth'>Authentication</NavigationItem> */}
        {/* <NavigationItem link='/logout'>Logout</NavigationItem> */}
    </ul>
);
export default NavigationItems;