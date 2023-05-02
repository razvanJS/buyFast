import './products.style.scss'
import { Button } from '../button/button.componet'
export const ProductCard = ({ product }) => {


    const { name, imageUrl, price } = product
    console.log(product.id)
    return (
        <div className='product-card-container' alt={name}>
            <img src={imageUrl} />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button buttonType='inverted'>Add To Card</Button>


        </div>
    )

}