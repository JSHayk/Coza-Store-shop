import React, { useState } from 'react'
import './Slider.scss'
import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'
import item1 from '../../../assets/slider/slider1.webp'
import item2 from '../../../assets/slider/slider2.webp'
import item3 from '../../../assets/slider/slider3.webp'
import BaseButton from "../../common/baseButton/BaseButton"
import { Link } from "react-router-dom"

const images = [item1, item2, item3]
const Slider = () => {
  const buttonCont = "Shop Now";
  const [count,setCount] = useState(0);
  const goLeft = ()=>{
    count>0 && setCount((prev)=>prev-1)
  }
  const goRight = ()=>{
    count < ((images.length)-1) && setCount((prev)=>prev+1)
  }

  // setTimeout(() => {
  //   let num = Math.floor(Math.random() * 3);
  //   console.log(num);
  //   setCount(num)  
  
  // }, 2000);
  
  window.onkeydown = (e)=>{
    if(e.keyCode === 37) goLeft()
    if(e.keyCode === 39) goRight()
  }

  return (
    <div className='slider'>
        <div className="slider-window">
            <img src={images[count]} alt="imaage" />
            {count===0 && <h1 className='new-season left-pos'>New Season</h1>}
            {count===0 && <p className='women-collection left-pos'>Women Collection</p>}
            {count===0 && <Link to="/Shop"><BaseButton text={ buttonCont } /></Link> }
            {count===1 && <h1 className='new-arrivals left-pos'>New Arrivals</h1>}
            {count===1 && <p className='men-collection left-pos'>Men Collection</p>}
            {count===1 && <Link to="/Shop"><BaseButton text={ buttonCont } /></Link>}
            {count===2 && <p className='men-new-season left-pos'>Men New-Season</p>}
            {count===2 && <h1 className='jackets left-pos'>Jackkets & Coats</h1>}
            {count===2 && <Link to="/Shop"><BaseButton text={ buttonCont } /></Link>}
            <AiFillCaretLeft className='slider-left' onClick={goLeft}/>
            <AiFillCaretRight className='slider-right' onClick={goRight}/>
        </div>
    </div>
  )
}

export default Slider