import React from 'react'
import './styles.css'

const InputOption = ({Icon, title, color}) => {
  return (
    <div className='inputOption'>
         <Icon style={{color:color}}/>
        <p >{title}</p>
    </div>
  )
}

export default InputOption