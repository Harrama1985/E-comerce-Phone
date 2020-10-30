import React from 'react'
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context';
import Button from '../UI/Button/Button';
import classes from './Product.module.css'
//import propType from 'prop-types'
function Product(props) {
    const {id,title,img,inCart,price} = props.product
    return (       
            <div className={classes.Product}>
                <ContextConsumer>
                    {value=>{
                    return(<div onClick={()=> value.detailHandler(id)} className={classes.HeaderCart}>
                        <Link to='/detail'>
                            <img src={img} />
                        </Link>
                        <Button type='Blue' 
                                disabled={inCart}
                                clicked={()=>value.addToCart(id)}>
                            {inCart ? 'In cart' : <i className='fas fa-cart-arrow-down'/>}
                        </Button>
                    </div>)
                
                }}
                </ContextConsumer>
                <div className={classes.FooterCart}>
                    <h3>{title}</h3>
                    <span>{price} $</span>
                </div>
                
            </div>
 
    )
}
/* Product.propType={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.numer,
        inCart:PropTypes.boolean
    }).isRequired
} */
export default Product

