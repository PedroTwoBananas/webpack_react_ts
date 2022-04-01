import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'
import imageLink from './images/image.jpg'

ReactDOM.render(
   <React.StrictMode>
      <div className="container">
         <h1 className="text">PedroTwoBananas</h1>
         <img className="image" src={imageLink} alt="" />
      </div>
   </React.StrictMode>,
   document.getElementById('root')
)
