
import { Button } from '../button/button.componet'
import './cart-dropdown.styles.scss'
import { CartItem } from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { DropDownContext } from '../contexts/dropdown-context'

import { useNavigate } from 'react-router-dom'


export const CartDropDown = () => {
    const { cartItem, setCart } = useContext(DropDownContext)
    const navigation = useNavigate()
    const useNavigationHandler = () => {
        navigation('/checkout')
        setCart(false)

    }


    return (

        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItem.map(item => <CartItem key={item.id} item={item} />)}
                <Button onClick={useNavigationHandler}>GO TO CHECKOUT</Button>
            </div>

        </div>

    )
}