import React, { Component } from 'react'
import { ContextConsumer } from '../../context'
import classes from './Modal.module.css'
import {Link} from 'react-router-dom'
import Button from '../UI/Button/Button'
class Modal extends Component {
    render() {
        return (
            <ContextConsumer>
                {(value)=>{
                    const{modalOpen,modelClose}=value
                    const {id,title,img,inCart,price}=value.products
                    if(!modalOpen){
                        return null;
                    }else{
                        return (<div className={classes.Modal}>
                            <h2 className={classes.Title}>Item added to cart</h2>
                            <img src={img}/>
                            <h2 className={classes.Title}>{title}</h2>
                            <span>Price: ${price}</span>
                            <Link to='/'><Button type='Blue'>continue shopping</Button></Link>
                            <Link to='/cart'><Button type='Orange'>go to cart</Button></Link>
                        </div>)
                    }
                }}
            </ContextConsumer>
        )
    }
}

export default Modal
