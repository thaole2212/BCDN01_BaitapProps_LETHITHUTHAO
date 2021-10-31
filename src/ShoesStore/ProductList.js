import React, { Component } from 'react'
import ProductShoes from './ProductShoes'
export default class ProductList extends Component {
    renderShoeslist=()=>{
        let {arrShoes,xemChiTiet}=this.props;
        return arrShoes.map((Shoes,index)=>{
            return <div className="col-3" key={index}>
                <ProductShoes sp={Shoes} xem={xemChiTiet}/>
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderShoeslist()}
            </div>
        )
    }
}
