import './form-input.styles.scss'
export const FormInput = ({ label, name, type, value, onChange }) => {

    if (!label) return;
    return (
        <div className="group">

            <input className="form-input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required />
            <label className={`${value.length ? 'shrink' : null} form-input-label`}>{label}</label>


        </div>
    )
}