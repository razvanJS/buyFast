import './checkout-item.styles.scss'
import { DropDownContext } from '../contexts/dropdown-context'
import { useContext } from 'react'

export const CheckoutItem = ({ item }) => {
    const { addToCart, decremetQunatity, removeCart } = useContext(DropDownContext)
    const { name, imageUrl, price, quantity } = item

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div onClick={() => removeCart(item)} className='remove-button'>&#10005;</div>


        </div>
    )
}