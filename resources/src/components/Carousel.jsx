import React from 'react';
import slide1 from '../img/slider-pendant-lighting.jpg'
import slide2 from '../img/slider-wall-clock.jpg'
import slide3 from '../img/slider-basket.jpg'
import slide1Mob from '../img/slider-pendant-lighting-alt.jpg'
import slide2Mob from '../img/slider-wall-clock-alt.jpg'
import slide3Mob from '../img/slider-basket-alt.jpg'
import { useState } from 'react';

function Carousel() {

  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(2)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === 2) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <section id='carousel'>
      <div style={{position:'relative'}}>
        <div style={{ transition: ".5s", transform: `translateX(-${current * 100}%)` }} className='carousel-container'>
          <div>
            <img src={slide1} alt="" />
            <img src={slide1Mob} alt="" />
            <div>
              <h4>Contemporary Pendant Lighting</h4>
              <p>Interior</p>
            </div>
          </div>
          <div>
            <img src={slide2} alt="" />
            <img src={slide2Mob} alt="" />
            <div>
              <h4>Minimal Rotating Disc Wall Clock</h4>
              <p>Decoration</p>
            </div>
          </div>
          <div>
            <img src={slide3} alt="" />
            <img src={slide3Mob} alt="" />
            <div>
              <h4>Bamboo Zigzag Pattern Basket</h4>
              <p>Essentials</p>
            </div>
          </div>
        </div>
        <div className='buttons' style={{position:"absolute", top:"50%", transform:"translateY(-50%)", left:"10px"}}><button onClick={previousSlide}><i className="fa-solid fa-angle-left"></i></button></div>
        <div className='buttons btn-right' style={{position:"absolute", top:"50%", transform:"translateY(-50%)", right:"10px"}}><button onClick={nextSlide}><i class="fa-solid fa-angle-right"></i></button></div>
      </div>
      <div className='dots'>
        <span style={{ backgroundColor: `${current === 0 ? 'rgb(219, 152, 21)' : 'rgb(170, 170, 170)'}` }}></span>
        <span style={{ backgroundColor: `${current === 1 ? 'rgb(219, 152, 21)' : 'rgb(170, 170, 170)'}` }}></span>
        <span style={{ backgroundColor: `${current === 2 ? 'rgb(219, 152, 21)' : 'rgb(170, 170, 170)'}` }}></span>
      </div>
    </section>
  )
}

export default Carousel