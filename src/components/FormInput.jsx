import "./formInput.css"

const FormInput = (props) => {
    return (
        <div className="formInput">
            <label>{props.name}</label>
            <br></br>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;