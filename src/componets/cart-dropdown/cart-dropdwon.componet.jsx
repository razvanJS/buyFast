
import { Button } from '../button/button.componet'
import './cart-dropdown.styles.scss'

export const CartDropDown = () => {


    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}