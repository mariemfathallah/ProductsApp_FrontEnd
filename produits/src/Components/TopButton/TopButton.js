import './TopButton.css'
import React,{useEffect, useState} from 'react'
import { FaAngleUp } from "react-icons/fa";

const TopButton = () => {
  const [TopButton,setTopButton ]= useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >50 ){
setTopButton(true)
      }else{
        setTopButton(false)
      }
    })
  },[])
  const scrollUp= () =>{
    window.scrollTo({
top:0,
behavior:"smooth"

    })
  }
  return (
    <div className='App'>
{
  TopButton && (
    <button
    className='bten' 
    style={{position:'relative',
    height:'50px',
    width:'53px',
    right:'50px',
    fontSize:'30px',
    backgroundColor:'#82ae46',
    color:'white',
    borderRadius:'30px',
    textAlign:'center',


    
  }}
    onClick={scrollUp}
    ><span className='icon-scroll'><FaAngleUp/></span></button>
  )
}
    </div>
  )
}
 
export default TopButton