
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';
import Button from '../../components/UI/Button/Button';
import { ContextConsumer } from '../../context';
//import Spinner from '../../components/UI/spinner/spinner';
//import { ContextConsumer } from '../../context';
import classes from './Details.module.css'
class Details extends Component {

    render() { 
        return ( <div>
            <ContextConsumer>
                {({detailProduct,addToCart})=> 
                    (<Fragment>
                        <Title>detailProduct.title</Title>
                        <div className={classes.Detail}>
                        <div className={classes.Image}>
                        <img src={detailProduct.img}/>
                        </div>
                        <div className={classes.Info}>
                        <h3>model : {detailProduct.title}</h3>
                        <p className={classes.Made}>made by : {detailProduct.company}</p>
                        <span>price : ${detailProduct.price}</span>
                        <p className={classes.Info_para}>{detailProduct.info}</p>
                        <div >
                            <Link to='/'><Button type='Blue'>Back to products</Button></Link>
                            
                            <Button type={detailProduct.inCart ? 'Blue':'Orange' }
                                disabled={detailProduct.inCart}
                                clicked={()=>addToCart(detailProduct.id)}>
                            {detailProduct.inCart ? 'In cart' : 'Add to cart'}
                            </Button>
                            
                        </div>
                        </div>
                        </div>
                    </Fragment>)
                    }
                    </ContextConsumer>
        </div> );
    }
}
 
export default Details;