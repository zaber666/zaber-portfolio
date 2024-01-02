import React from 'react'
import covid19 from "../covid19.png"
import nfl from "../nfl.png"
import vinbig from "../VinBig.png"
import chimpact from "../chimpact.jpg"
import sps from "../SPS.svg"
import "./Competition.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const Competition = () => {
    return (
        <div className='com-container'>
            <div className='com-left-half'>
                <div className='com-txt-holder'>
                    Competition
                </div>

            </div>


            <div className='com-right-half'>
                <div className='com-handle'>
                    <svg className='com-svg-elem'>
                        <circle cx="80%" cy="95" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="115" x2="80%" y2="350" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="370" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="390" x2="80%" y2="615" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="635" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="645" x2="80%" y2="890" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="910" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="930" x2="80%" y2="1175" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="1195" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                <div className='com-itm-holder'>
                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={covid19} className='com-logo' alt="Covid 19"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    SIIM-FISABIO-RSNA COVID-19 Detection
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Identify and localize COVID-19 abnormalities on chest radiographs </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    <div> 4<sup>th</sup> place out of 1305 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
                                    <div>Gold Medal Winner <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"gold"}}/> </div>
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
                                    <div>Best Student Team </div>
                                </div>      
                            </div>
                        </div>
                    </div>


                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={nfl} className='com-logo' alt="NFL"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    NFL 1st and Future - Impact Detection
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Detect helmet impacts in videos of NFL plays </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    <div> 25<sup>th</sup> place out of 459 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
                                    <div>Silver Medal Winner <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"silver"}}/> </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={vinbig} className='com-logo' alt="VinBig"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    VinBigData Chest X-ray Abnormalities Detection
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Automatically localize and classify thoracic abnormalities from chest radiographs </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    <div> 43<sup>rd</sup> place out of 1275 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
                                    <div>Silver Medal Winner <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"silver"}}/> </div>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>


                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={chimpact} className='com-logo' alt="VinBig"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    Deep Chimpact
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Depth Estimation of Wildlife Animals in Photos </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    <div> 1<sup>st</sup> place out of 313 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div>
                                    <div>Winner <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"gold"}}/> </div>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={sps} className='com-logo' alt="SPS"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    IEEE Signal Processing Cup 2022
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Synthetic Speech Attribution </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    {/* <div> 1<sup>st</sup> place out of 313 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div> */}
                                    <div>Winner <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"gold"}}/> </div>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>


                    <div className='com-itm'>
                        <div className='com-itm-title'>
                            <div className='com-itm-title-logo'>
                                <img src={sps} className='com-logo' alt="SPS"/>  
                            </div>

                            <div className='com-itm-title-desc'>
                                <div className='com-itm-title-desc-itm-pos'>
                                    IEEE Video and Image Processing Cup 2022
                                </div>
                                
                                <div className='com-itm-title-desc-itm-names'> Synthetic Image Detection </div>

                                <div className='com-itm-title-desc-itm-comp' style={{display:"flex"}}>
                                    {/* <div> 1<sup>st</sup> place out of 313 teams</div> 
                                    <div style={{marginLeft:"10px", marginRight:"10px"}}>|</div> */}
                                    <div>First Runner-Up <FontAwesomeIcon icon={faMedal} style={{marginLeft:'10px', marginRight:"5px", fontSize:'large', color:"silver"}}/> </div>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Competition