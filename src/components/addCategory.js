import React,{useState} from "react"
import propTypes from "prop-types"

export const AddCategory = ({setCategories}) => {
	const [inputValue,setInputValue] = useState("Starting value")

	const handleInput = (e)=>{
		setInputValue(e.target.value)
	}

	const handleSubmit = (e)=>{

		e.preventDefault()
		if(inputValue.trim().length>2){
			setCategories((cat)=>[inputValue,...cat])
			setInputValue("")
		}
	}

	return (
		<>
			<form 
				onSubmit={handleSubmit}>

				<input
					
					type = "text"
					value = {inputValue}
					onChange={handleInput}
				/>
			</form>
		</>
		)
}

AddCategory.propTypes = {
	setCategories: propTypes.func.isRequired 
}