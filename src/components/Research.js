import React from 'react'
import artifact from "../visual_summary2.jpg"
import "./Research.css"

const Research = () => {
    return (
        <div className='res-container'>
            <div className='res-left-half'>
                <div className='res-txt-holder'>
                    Publications
                </div>

            </div>


            <div className='res-right-half'>
                <div className='handle'>
                    <svg className='svg-elem'>
                        <circle cx="80%" cy="120" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="140" x2="80%" y2="420" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="445" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                        <line x1="80%" y1="470" x2="80%" y2="725" stroke="#0a76e7" strokeWidth="1" />

                        <circle cx="80%" cy="750" r="12" stroke="#0a76e7" strokeWidth="1" fill="none" />

                    </svg>
                </div>

                <div className='res-itm-holder'>
                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={artifact} className='res-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                    ArtiFact: A Large-Scale Dataset with Artificial and Factual Images for Generalizable and Robust Synthetic Image Detection
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> Md Awsafur Rahman*, Bishmoy Paul*, Najibul Haque Sarker*, <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>*, Shaikh Anowarul Fattah</div>

                                <div className='res-itm-title-desc-itm-comp'>IEEE International Conference on Image Processing (ICIP) 2023</div>
                                
                                <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={artifact} className='res-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                    ArtiFact: A Large-Scale Dataset with Artificial and Factual Images for Generalizable and Robust Synthetic Image Detection
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> Md Awsafur Rahman*, Bishmoy Paul*, Najibul Haque Sarker*, <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>*, Shaikh Anowarul Fattah</div>

                                <div className='res-itm-title-desc-itm-comp'>IEEE International Conference on Image Processing (ICIP) 2023</div>
                                
                                <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={artifact} className='res-logo' alt="IQVIA Logo"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                    ArtiFact: A Large-Scale Dataset with Artificial and Factual Images for Generalizable and Robust Synthetic Image Detection
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> Md Awsafur Rahman*, Bishmoy Paul*, Najibul Haque Sarker*, <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>*, Shaikh Anowarul Fattah</div>

                                <div className='res-itm-title-desc-itm-comp'>IEEE International Conference on Image Processing (ICIP) 2023</div>
                                
                                <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Research