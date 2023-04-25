import React from 'react'
import './map.css'

function Map() {
  return (
    <div className='maap'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4787214755165!2d30.09120771375049!3d-1.962243937288009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca9b295f0ced9%3A0x3cb73a2a3f5aa7c5!2sSOLVIT%20AFRICA!5e0!3m2!1sen!2srw!4v1680697499369!5m2!1sen!2srw" 
        width="280"
         height="160"
         style={{ border: "0"}}
         allowfullscreen=""
          loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
    </div>
  )
}

export default Map


// "react-google-maps": "^9.4.5",
// "google-maps-react": "^2.0.6",