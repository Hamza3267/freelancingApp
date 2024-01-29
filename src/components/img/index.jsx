import React from 'react'

const Image = ({img, imgsetting, imgdiv}) => {
  return (
    <div className={`${imgdiv}`}>
      <img src={img} alt='' className={`${imgsetting}`}/>
    </div>
  )
}

export default Image
