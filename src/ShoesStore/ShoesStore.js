import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'
import productdata from './data.json'

export default class ShoesStore extends Component {
    
      product=productdata;
      state={
        shoesdetail:{
          id: 1,
          name: "Adidas Prophere",
          alias: "adidas-prophere",
          price: 350,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 995,
          image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
      }
      xemChiTiet=(Shoes)=>{
        this.setState({
          shoesdetail: Shoes
        })
      }
    render() {
        return (
            <div className="container">
                <ProductList arrShoes={this.product} xemChiTiet={this.xemChiTiet}/>
                <Modal productDetail={this.state.shoesdetail}/>
            </div>
        )
    }

}
