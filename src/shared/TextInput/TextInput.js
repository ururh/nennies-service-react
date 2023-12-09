import React from 'react'
import { Input } from './TextInputStyled';


const TextInput = ({ type, name, placeholder, value, onChange, onBlur }) => {
  return (
    <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
  )
}

export default TextInput