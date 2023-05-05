import './navigation.styles.scss'
import { Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { useContext, useState } from 'react';
import { UserContext } from '../../componets/contexts/user-context';
import { signOutUser } from '../../utils/fierbase/firebase.utils';
import { CardIcon } from '../../componets/cart-icon/cart-icon.componet';
import { CartDropDown } from '../../componets/cart-dropdown/cart-dropdwon.componet';
import { DropDownContext } from '../../componets/contexts/dropdown-context';


export const Navigation = () => {
    const { cartIsOpen, setCart } = useContext(DropDownContext)
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser, 'Navigation Page')

    let mail;


    if (currentUser) {


        mail = currentUser.email[0].toUpperCase() + currentUser.email.slice(1, currentUser.email.indexOf('@')).toLowerCase()

    }

    const nameEvent = (e) => (e.target.textContent !== 'Sing Out') ? e.target.textContent = 'Sing Out' : e.target.textContent = `${mail}`
    const handler = async (e) => {


        if (e.target.textContent === 'Sing Out') {

            await signOutUser()
            // console.log(currentUser)
        }
    }



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
                    {currentUser === null ? (<Link className='nav-link' to='/auth'>Sign In</Link>) :
                        (<Link className='nav-link' onClick={handler} onMouseOver={nameEvent} to='/'>{mail}</Link>)}
                    <CardIcon />
                </div>
                {(cartIsOpen) ? <CartDropDown /> : ''}


            </div>
            <Outlet />

        </Fragment>


    )
}

