import './Form.scss';


const FormSelectLanguage = (props) => {


    const selectChangeHandler = (event) => {
        //console.log(event.target.value)
        props.onSelectLanguage(event.target.value)
    }
    

    return(
        <div>
            <select className="form-input"
                onChange={selectChangeHandler}
                name="" id="">
                <option value="javascript">javascript</option>
                <option value="css">css</option>
                <option value="json">json</option>
                <option value="html">html</option>
            </select> 
        </div> 
    )
}

export default FormSelectLanguage;