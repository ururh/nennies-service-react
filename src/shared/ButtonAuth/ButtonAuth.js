import React from 'react'
import { Button } from './ButtonAuthStyled';

const ButtonAuth = ({ buttonText }) => {
  return <Button type='submit'>{buttonText}</Button>;
}

export default ButtonAuth