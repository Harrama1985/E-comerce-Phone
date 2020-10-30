import React, { Component, Fragment } from 'react'
import Product from '../../components/Product/Product'
import Title from '../../components/Title/Title'
import { ContextConsumer } from '../../context'
import classes from './ProductsList.module.css'
import Spinner from '../../components/UI/spinner/spinner'
class ProductsList extends Component {
/*     clickedHandler=(id)=>{
        localStorage.setItem('idProduct',id)
    } */
    render() {
        return (
            <Fragment>
                <Title text='our '>products</Title>
                    <div className={classes.ProductsList}>
                        <ContextConsumer>
                            {(value)=>value.products?
                                value.products.map(product=>(
                                    <Product key={product.id} 
                                            product={product} 
                                            />))
                                : <Spinner/>
                            }
                        </ContextConsumer>
                    </div>
            </Fragment>
        )
    }
}

export default ProductsList






