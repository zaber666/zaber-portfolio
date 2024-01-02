import React from 'react'
import "./Topbar.css"

const Topbar = ({homePoint, expPoint, researchPoint, compPoint}) => {
    
    return (
    
        <div className='topbar-container'>

            <div className='topbar-name'>
                Zaber
            </div>
            
            {/* ===================================================== */}

            <div className='topbar'>
                <span key="home" className="topbar-option" onClick={homePoint}>
                    Home
                </span>

                <span key="exp" className="topbar-option" onClick={expPoint}>
                    Experience
                </span>

                <span key="Pub" className="topbar-option" onClick={researchPoint}>
                    Research
                </span>

                <span key="con" className="topbar-option" onClick={compPoint}>
                    Competition
                </span>

            </div>
            
            
        </div>
    
    )
}

export default Topbar