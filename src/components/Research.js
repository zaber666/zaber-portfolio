import React from 'react'
import artifact from "../artifact.jpg"
import vl from "../videoLang.png"
import multimodal from "../multimodal.png"
import spcup from "../spcup.JPG"
import liquid from "../liquid.JPG"
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

                <div className='res-itm-holder'>
                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={artifact} className='res-logo' alt="Artifact Logo"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                    ArtiFact: A Large-Scale Dataset with Artificial and Factual Images for Generalizable and Robust Synthetic Image Detection
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> Md Awsafur Rahman*, Bishmoy Paul*, Najibul Haque Sarker*, <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>*, Shaikh Anowarul Fattah</div>

                                <div className='res-itm-title-desc-itm-comp'>Accepted at IEEE International Conference on Image Processing (ICIP) 2023</div>
                                
                                {/* <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div> */}
                            </div>
                        </div>

                    </div>


                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={vl} className='res-logo' alt="video language"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                Leveraging Generative Language Models for Weakly Supervised Sentence Component Analysis in Video-Language Joint Learning
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>*, Najibul Haque Sarker*, Rahul Pratap Singh, Bishmoy Paul, Ali Dabouei, Min Xu</div>

                                <div className='res-itm-title-desc-itm-comp'>Under Review at 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)</div>
                                
                                {/* <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div> */}
                            </div>
                        </div>

                    </div>


                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={multimodal} className='res-logo' alt="multimodal"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                Attention-Driven Multi-Modal Fusion: Enhancing Sign Language Recognition and Translation
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> <span style={{ textDecoration: 'underline' }}>Zaber Ibn Abdul Hakim</span>, Rasman Mubtasim Swargo, Muhammad Abdullah Adnan</div>

                                <div className='res-itm-title-desc-itm-comp'>Under Review at 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</div>
                                
                                {/* <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div> */}
                            </div>
                        </div>

                    </div>

                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={spcup} className='res-logo' alt="spcup"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                SYN-ATT: Synthetic Speech Attribution Via Semi-Supervised Unknown Multi-Class Ensemble of CNNs
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> MA Rahman*, B Paul*, NH Sarker*, <span style={{ textDecoration: 'underline' }}>ZIA Hakim</span>*, SA Fattah</div>

                                <div className='res-itm-title-desc-itm-comp'>Under Review at 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</div>
                                
                                {/* <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div> */}
                            </div>
                        </div>

                    </div>


                    <div className='res-itm'>
                        <div className='res-itm-title'>
                            <div className='res-itm-title-logo'>
                                <img src={liquid} className='res-logo' alt="spcup"/>  
                            </div>

                            <div className='res-itm-title-desc'>
                                <div className='res-itm-title-desc-itm-pos'>
                                Detecting Anomalies from Liquid Transfer Videos in Automated Laboratory Setting
                                </div>
                                
                                <div className='res-itm-title-desc-itm-names'> NH Sarker, <span style={{ textDecoration: 'underline' }}>ZIA Hakim</span>, A Dabouei, MR Uddin, Z Freyberg, A MacWilliams, J Kangas, M Xu</div>

                                <div className='res-itm-title-desc-itm-comp'>Accepted at Frontiers at Molecular Biosciences</div>
                                
                                {/* <div className='res-itm-title-desc-itm-info'>
                                    We addressed the limitations of existing fake image detection approaches by proposing a dataset of 2.5 million images and a new method to overcome their poor performance on images generated from unseen algorithms.
                                </div> */}
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Research