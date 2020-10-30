import React, { Component, createContext } from 'react'
import axios from './axios-products'
const ContextProducts = createContext()
class ContextProvider extends Component {
    state={
        products:[],
        detailProduct:{},
        toCart:[],
        modalOpen:true
    }
    async componentDidMount(){
        const products = await axios.get('https://phoneecomerce.firebaseio.com/Products.json')
        this.setState({products:[...products.data]})
    }
    getProduct=(id)=>{
        const product = this.state.products.find(item=>item.id===id)
        return product
    }
    detailHandler=(id)=>{
        const product = this.getProduct(id)
        this.setState(()=>{
            return {detailProduct:product}
        })
    }
    addToCart=(id)=>{
        const product = this.getProduct(id)
        const setProducts = this.state.products.filter(prd=>{
            if(prd.id===product.id){
                prd.inCart=true
                prd.cout=1
                prd.total=prd.price
                return prd
            }else{return prd}
        })
        this.setState(()=>{
            return{
                products:setProducts,
                toCart:[...this.state.toCart,product]
            }
        })
    }
    modalOpen=()=>{
        this.setState(()=>{
            return {modalOpen:true}
        })
    }

    modalClose=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    render() {
        return (
            <ContextProducts.Provider value={{
                                        ...this.state,
                                        detailHandler:this.detailHandler,
                                        addToCart:this.addToCart,
                                        modalOpen:this.modalOpen,
                                        modalClose:this.modalClose
                                        }}>
                {this.props.children}
            </ContextProducts.Provider>
        )
    }
}
const ContextConsumer = ContextProducts.Consumer;
export {ContextProvider,ContextConsumer}


