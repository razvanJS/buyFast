
import { useContext } from 'react'
import { ProductsContext } from '../../componets/contexts/products-context'
import { Fragment } from 'react'
import { ProductCard } from '../../componets/products/products.componet'

import "./shop-styles.scss"

export const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className='shop-component'>
            {products.map((product) => {

                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    )
}