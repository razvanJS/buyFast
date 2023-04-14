import './button.styles.scss'


const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: "inverted",
    redirect: 'google-sign-in-redirect'

}


export const Button = ({ children, buttonType, ...props }) => {


    return (
        <button className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`} {...props} >{children}</button>
    )
}
