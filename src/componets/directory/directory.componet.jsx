import { CategoryItem } from "../category-item/category-item.componet";
import './directory.styles.scss'
export const Directory = (props) => {
    const { categories } = props

    return (

        <div className='directory-container'>
            {
                categories.map(category => {
                    const { id } = category
                    return (
                        <CategoryItem key={id} category={category} />
                    )
                }


                )

            }

        </div>

    );
}