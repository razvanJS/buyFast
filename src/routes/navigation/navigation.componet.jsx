import './navigation.styles.scss'
import { Fragment, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { useContext, useState } from 'react';
import { UserContext } from '../../componets/contexts/user-context';
import { signOutUser } from '../../utils/fierbase/firebase.utils';

export const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log(currentUser, 'Navigation Page')

    let mail;
    if (currentUser) {
        mail = currentUser.user.email[0].toUpperCase() + currentUser.user.email.slice(1, currentUser.user.email.indexOf('@')).toLowerCase()

    }

    const nameEvent = (e) => (e.target.textContent !== 'Sing Out') ? e.target.textContent = 'Sing Out' : e.target.textContent = `${mail}`
    const handler = async (e) => {



        if (e.target.textContent === 'Sing Out') {
            await signOutUser()
            setCurrentUser(null)
            console.log(currentUser)
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



                </div>




            </div>
            <Outlet />
        </Fragment>


    )
}

