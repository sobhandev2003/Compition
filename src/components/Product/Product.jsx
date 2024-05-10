import "./Product.css"
import { useEffect, useState } from "react"
import productsjso from '../../json/Product.json'
import { ProductCard } from "./ProductCurd"
const Product =()=>{
const [Products,setProducts]=useState([])
console.log(productsjso);
    useEffect(()=>{
        setProducts(productsjso.product)
    },[])

    return (
        <div className="product-container-main">
                {
                    Products && Products.map((product)=>(
                        <ProductCard
                        pname={product.pname}
                        image={product.link}
                        description={product.description}
                        price={product.price}
                        ></ProductCard>
                    ))
                }
        
        
        </div>
    )
}
export default Product
