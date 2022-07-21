import React, { useState, useEffect } from 'react'
import './ModalSlider.css'

const ModalSlider = () => {

    const [imagesList, setImagesList] = useState([]);
    const [scrollState, setScrollState] = useState(0);

    useEffect(() => {
        getImageList().then(docs=>
            setImagesList(docs))
    }, []);

    let count=0
    const nextButton =()=>{
        count = imagesList.length-1 === count? 0 : count+1
        setImagesList("-"+count+"vw");
    }
    const prevButton = ()=>{
        count = count ===  0? imagesList.length-1 : count-1
        setScrollState("-"+count*100+"vw");
    }
  return (
    <>
      <ul className='pf__slider'>
          <li className='mainImg' style={{
            backgroundImage: `url('${scrollState}')`
          }}/>
      </ul>
      <div>
          <button onClick={prevButton}>prev</button>
          <button onClick={nextButton}>next</button>
      </div>
    </>
  )
}

export default ModalSlider
