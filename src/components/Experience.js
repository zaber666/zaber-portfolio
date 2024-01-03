import React from 'react'
import "./Experience.css"
import iqviaLogo from "../IQV.png"
import buetLogo from "../buet.png"
import cmuLogo from "../cmu.png"

const Experience = () => {
    return (
        <div className='exp-container'>
            <div className='exp-left-half'>
                <div className='exp-txt-holder'>
                    Experience
                </div>

            </div>


            <div className='exp-right-half'>
                <div className='handle'>
                    <svg className='svg-elem'>
                        <circle cx="80%" cy="105" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="125" x2="80%" y2="365" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="385" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        {/* <line x1="80%" y1="410" x2="80%" y2="660" stroke="#0a76e7" strokeWidth="1" /> */}

                        {/* <circle cx="80%" cy="680" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" /> */}

                    </svg>
                </div>

                <div className='exp-itm-holder'>
                    <div className='exp-itm'>
                        <div className='exp-itm-title'>
                            <div className='exp-itm-title-logo'>
                                <img src={iqviaLogo} className='exp-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='exp-itm-title-desc'>
                                <div className='exp-itm-title-desc-itm-pos'>Machine Learning Engineer</div>
                                <div className='exp-itm-title-desc-itm-comp'>IQVIA</div>
                                <div className='exp-itm-title-desc-itm-info'>
                                    <div style={{marginRight:'15px'}}>
                                        June 2023 - Present
                                    </div>

                                    <div style={{marginRight:'15px'}}>
                                        |
                                    </div>

                                    <div >
                                        Dhaka, Bangladesh
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='exp-itm-points'>
                            <ul className='exp-points-list'>
                                <li className='exp-points-list-itm'>Research & Development of Generative LLM</li>
                                <li className='exp-points-list-itm'>Building FastAPI for ML models</li>   
                            </ul>
                        </div>

                        
                    </div>


                    {/* <div className='exp-itm'>
                        <div className='exp-itm-title'>
                            <div className='exp-itm-title-logo'>
                                <img src={iqviaLogo} className='exp-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='exp-itm-title-desc'>
                                <div className='exp-itm-title-desc-itm-pos'>Machine Learning Engineer</div>
                                <div className='exp-itm-title-desc-itm-comp'>IQVIA</div>
                                <div className='exp-itm-title-desc-itm-info'>
                                    <div style={{marginRight:'15px'}}>
                                        June 2023 - Present
                                    </div>

                                    <div style={{marginRight:'15px'}}>
                                        |
                                    </div>

                                    <div >
                                        Dhaka, Bangladesh
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='exp-itm-points'>
                            <ul className='exp-points-list'>
                                <li className='exp-points-list-itm'>Building FastAPI for ML models to communicate with backend</li>
                                <li className='exp-points-list-itm'>Research & Implementation of Generative AI models for health science</li>
                                
                            </ul>
                        </div>
                    </div> */}


                    <div className='exp-itm'>
                        <div className='exp-itm-title'>
                            <div className='exp-itm-title-logo'>
                                <img src={cmuLogo} className='exp-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='exp-itm-title-desc'>
                                <div className='exp-itm-title-desc-itm-pos'>Research Intern</div>
                                <div className='exp-itm-title-desc-itm-comp'>Xu Lab, Carnegie Mellon University</div>
                                <div className='exp-itm-title-desc-itm-info'>
                                    <div style={{marginRight:'15px'}}>
                                        January 2022 - Present
                                    </div>

                                    <div style={{marginRight:'15px'}}>
                                        |
                                    </div>

                                    <div >
                                        Remote
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='exp-itm-points'>
                            <ul className='exp-points-list'>
                                <li className='exp-points-list-itm'>Improving Sentence Component Understanding for Video Grounding</li>
                                <li className='exp-points-list-itm'>Anomaly Detection from Videos of Laboratory Experiments</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Experience