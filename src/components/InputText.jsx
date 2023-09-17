import React, { useState } from "react"
import './inputText.css'

export const InputText = ({ handleNewItem }) => {
  const [inputValue, setInputValue] = useState('tres')

  const handleInputChange = ({ target }) => { 
    setInputValue(target.value)
    
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    if ( inputValue.trim().length < 3) return
    handleNewItem(inputValue.trim())
    setInputValue('')
  }
  
  return (
		<form onSubmit={handleSubmit}>
			<input
				className='input_text'
				type='text'
				value={inputValue}
				placeholder='Que deseas ingresar hoy?'
				onChange={handleInputChange}
			/>
		</form>
	);
}