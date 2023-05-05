import './products.style.scss'
import { Button } from '../button/button.componet'
import { useContext } from 'react'
import { DropDownContext } from '../contexts/dropdown-context'


export const ProductCard = ({ product }) => {

    const { addToCart } = useContext(DropDownContext)
    const buttonAddHandler = () => addToCart(product)


    const { name, imageUrl, price } = product
    return (
        <div className='product-card-container' alt={name}>
            <img src={imageUrl} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button buttonType='inverted' onClick={buttonAddHandler}>Add To Card</Button>


        </div>
    )

}