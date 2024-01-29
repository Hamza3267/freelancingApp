import React from 'react'
import style from './textmapping.module.scss'
const TextMap = ({title,desc,paragraph,titleclass,descclass,paragraphclass}) => {
  return (
    <div>
      <p className={`${style.p}  ${titleclass}`}>{title}</p>
      <p className={`${style.p1}  ${paragraphclass}`}>{paragraph}</p>
      <p className={`${style.p2}  ${descclass}`}>{desc}</p>
     
    </div>
  )
}

export default TextMap
