import React from 'react'
import "./Home.css"
import myImage from "../interlaken-3.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-left-half'>
            <img src={myImage} className='profile-picture' alt="Profile Picture"/>

            <div className='home-name'>Zaber Ibn Abdul Hakim</div>

            <div className='profile-work1'>
                Machine Learning Engineer; IQVIA
            </div>

            <div className='profile-work2'>
                Research Intern at Xu Lab; CMU
            </div>

            <div className='profile-work2'>
                Part-time Lecturer; BUET
            </div>

            {/* <div className='profile-work2'>
                Kaggle Competition Master
            </div> */}

        </div>


        <div className='home-right-half'>
            <div className='biography'>
                Biography
            </div>

            <div className='bio-dscr'>
                I am a third-year PhD student in the Department of Computer Science at UNC Chapel Hill, where I have the privilege of working with Professor Gedas Bertasius. My primary research focuses on computer vision, video understanding, and multi-modal deep learning.
            </div>

            <div className='bio-dscr' style={{marginTop:'1%'}}>
                During the summer of 2023, I had the incredible opportunity to join the FAIR Accel at Meta AI as a Research Scientist Intern. This followed my previous experience as a Machine Learning Intern at Comcast AI during Summer 2022. Before starting my PhD program at UNC, I gained valuable industry experience as a Software Engineer at Samsung R&D Institute. Additionally, I had the honor of serving as a lecturer at the Computer Science Department of the University of Asia Pacific.
            </div>

            <div className='home-elems'>
                <div className='home-elem-left'>
                    <div className='interest'>
                        Interests
                    </div>

                    <ul className='ul-int'>
                        <li className='ul-int-itm'>Computer Vision</li>
                        <li className='ul-int-itm'>Video Understanding</li>
                        <li className='ul-int-itm'>Video-Language Multimodl Tasks</li>
                    </ul>
                </div>

                <div className='home-elem-right'>
                    <div className='interest'>
                        Education
                    </div>

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>

                        <div className='edu-item-name'>
                            <div className='uni-degree'>BSc in Computer Science and Engineering,</div>
                            <div className='uni-year'>2018-2023,</div>
                            <div className='uni-name'>Bangladesh Univeristy of Engineering and Technology (BUET)</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Home