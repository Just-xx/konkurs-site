import React from 'react'
import './Button.css';

export default function Button({ children, secondary, fileInput, ...props}) {
  return (
    <>
      { fileInput ? 
          <>
            <input type="file" name="file" id="file-uload" className={`file-upload ${secondary ? 'btn-secondary' : ''}`}  {...props}/>
            <label className='btn' htmlFor="file-uload">{children}</label>
          </> :
          <button className={`btn ${secondary ? 'btn-secondary' : ''}`} {...props}>{children}</button>
      }
    </>
  )
}