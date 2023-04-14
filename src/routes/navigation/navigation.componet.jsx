import './navigation.styles.scss'
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"


export const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                {/* {Home link} */}
                <Link className="logo-container" to='/'>
                    <div><CrownLogo className="logo" /></div>
                </Link>
                {/* {All the Nav Links} */}
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    <Link className='nav-link' to='/auth'>Sign In</Link>

                </div>




            </div>
            <Outlet />
        </Fragment>


    )
}

