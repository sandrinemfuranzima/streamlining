import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Device1 from '../assets/image/Device1.jpg'
import Device2 from '../assets/image/Device2.jpg'
import Device3 from '../assets/image/Device3.jpg'


export default function Mycarousel (){
  return (
    <div>
        <Carousel>
                <div className='md-2-0'>
                    <img src={Device1} alt='' />
                   
                </div>
                <div>
                    <img src={Device2} alt='' />
                   
                </div>
                <div>
                    <img src={Device3} alt='' />
                   
                </div>
            </Carousel>
            </div>
  )
}






