
import './cart-item.styles.scss'

export const CartItem = ({ item }) => {

    const { id, imageUrl, name, price, quantity, priceTotal } = item

    return (
        <div className="cart-item-container">
            <img src={imageUrl} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>Price:{price}</span>
                <span>Quantity:{quantity}</span>

            </div>


        </div>
    )
}