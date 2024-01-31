import React from 'react'
import style from './input.module.scss'
const Input = ({inputdiv}) => {
  return (
    <div className={`${style.divv} ${inputdiv}`}>
      <input placeholder='enter text' className={style.input}></input>
    </div>
  )
}

export default Input
