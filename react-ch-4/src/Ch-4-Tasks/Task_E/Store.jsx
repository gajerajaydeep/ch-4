import React from 'react'
import LaptopImg from '../../../public/laptopimg.jpg'
import "./Store.css"
import {useCart,useDispatchCart} from "./Cart"

export default function Store() {
    const items = useCart() 
    // console.log(items);

    const disPatch = useDispatchCart();
    
    const addToCart=(item) =>{
        // console.log("btn-clicked");
        //  console.log(item);

        disPatch({type : "ADD",item})
        
    }
    return (
        <>
            <div className="cart-container">
                <span className='cart-span'>Cart is : {items.length}</span>


                <div className="product">
                    <h1>laptop</h1>
                    <img src={LaptopImg} alt="" width={200} /><br />
                    <p>Price : 42000/-</p>
                    <button onClick={()=>(addToCart())}>Add to Cart</button>
                </div>
            </div>

        </>
    )
}
