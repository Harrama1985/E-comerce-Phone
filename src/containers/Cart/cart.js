import React, { Component, Fragment } from 'react';
import CartColumns from '../../components/CartColumns/CartColumns';
import Title from '../../components/Title/Title'
import { ContextConsumer } from '../../context';
class Cart extends Component {
    render() { 
        return ( <Fragment>
            <Title text='your '>cart</Title>
            <ContextConsumer>
                {({toCart})=>{
                    return(
                        <CartColumns toCart={toCart}/>
                    )
                }}
            </ContextConsumer>
        </Fragment> );
    }
}

export default Cart;