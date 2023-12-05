import React from 'react'
import "./Topbar.css"

const Topbar = () => {
  return (
    
    <div className='topbar-container'>

        <div className='topbar-name'>
            Zaber
        </div>
        
        {/* ===================================================== */}

        <div className='topbar'>
            <span key="home" className="topbar-option">
                Home
            </span>

            <span key="exp" className="topbar-option">
                Experience
            </span>

            <span key="Pub" className="topbar-option">
                Publication
            </span>

            <span key="con" className="topbar-option">
                Contact
            </span>

        </div>
        
        
    </div>
    
  )
}

export default Topbar