import React from 'react'
import style from './input.module.scss'
const Input = () => {
  return (
    <div className={style.divv}>
      <input placeholder='enter text' className={style.input}></input>
    </div>
  )
}

export default Input
