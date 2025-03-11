import React from 'react'
import logo from '../assets/logo-mark.svg';
import iconUpload from '../assets/icon-upload.svg'

const MainBackground = () => {


  return  (
    <div className="main-background">
      <div className="pattern-lines"></div>
      <div className="pattern-circle"></div>
      <div className="pattern-circle-second"></div>
   
      <div className='center-top-label'>
        <img src={logo} alt="Logo"  style={{width:"20px",marginRight:"10px"}}/>
        <label>Coding to Greatness</label>
      </div>

      <div className='center-big-label'>
        <label>Your Journey to Coding to Greatness 2025 !</label>
      </div>
      <div className='description-label'>
        <label>Your Journey to Coding to Greatness 2025 !</label>
      </div>

      <div className='upload-field'>
        <label >Upload Avatar</label>
        <div className='field-to-dropfile'>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <div className='button-to-upload-avatar'>
            <img src={iconUpload} alt="iconUpload"  style={{width:"20px"}}/>
            </div>
            <div>
              Drag and Drop or click to upload
            </div>
            </div>
        </div>
      </div>
      
    </div>
  )

}

export default MainBackground
