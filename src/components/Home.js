import React from 'react'
import "./Home.css"
import myImage from "../interlaken-3.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHandPointRight, faEnvelope, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons';
import scholar from "../googleScholar.png"
import resumeIcon from "../resumeIcon2.png"
import pdfUrl from "../zaber_resume.pdf"
// import pdfUrl from "../CV_Zaber.pdf"


const Home = () => {
//   const openPdfInNewWindow = () => {
//         // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
//     // const pdfUrl = '../CV_Zaber.pdf';
    
//         // Open the PDF in a new window
//     window.open(pdfUrl, '_blank');
//   };


  return (
    <div className='home-container'>
        <div className='home-left-half'>
            <img src={myImage} className='profile-picture' alt="Profile Picture"/>

            <div className='home-name'>Zaber Ibn Abdul Hakim</div>

            <div className='profile-work1'>
                <a href="mailto:zaberhakim666@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'25px', fontSize:'xx-large', color:"#1874be"}}/>
                </a>

                <a href="https://www.linkedin.com/in/zaber-ibn-abdul-hakim-024010185/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{marginRight:'25px', fontSize:'xx-large', color:'#0a66c2'}} />
                </a>

                <a href="https://scholar.google.com/citations?user=fcg9BRAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={scholar} style={{height:"30px", width:"30px", marginRight:"25px"}}/>
                </a>

                <a href="https://www.kaggle.com/zaber666" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faKaggle} style={{fontSize:'xx-large', color:"#20beff", marginRight:"25px",}} />
                </a>

                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <img src={resumeIcon} style={{height:"35px", width:"35px", cursor:"pointer"}} />
                </a>

                
            </div>

            {/* <div className='profile-work2'>
                Research Intern
            </div> */}

            {/* <div className='profile-work2'>
                Part-time Lecturer; BUET
            </div> */}

            {/* <div className='profile-work2'>
                Kaggle Competition Master
            </div> */}

        </div>


        <div className='home-right-half'>
            <div className='biography'>
                Summary
            </div>

            <div className='sum-item'>
                <div className='sum-item-icon'>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>

                <div className='sum-item-name'>
                    <div className='sum-itm-dsc'>Published 2 Research Paper.</div>
                    
                </div>
            </div>

            <div className='sum-item'>
                <div className='sum-item-icon'>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>

                <div className='sum-item-name'>
                    <div className='sum-itm-dsc'>Working as a Machine Learning Engineer</div>
                </div>
            </div>

            <div className='sum-item'>
                <div className='sum-item-icon'>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>

                <div className='sum-item-name'>
                    <div className='sum-itm-dsc'>Research Intern at Xu Lab of Carnegie Mellon Univeristy for 2 years</div>
                </div>

            </div>

            <div className='sum-item'>
                <div className='sum-item-icon'>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>

                <div className='sum-item-name'>
                    <div className='sum-itm-dsc'>Kaggle Competition Master (1 Gold, 4 Silver, 2 Bronze Medals)</div>
                </div>
            </div>

            <div className='sum-item'>
                <div className='sum-item-icon'>
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>

                <div className='sum-item-name'>
                <div className='sum-itm-dsc'>Completed Bachelor Degree in Computer Science and Engineer</div>
                </div>
            </div>

            {/* <div className='bio-dscr'>
                bleh bleh bleh bleh bleh bleh vbleh bleh bleh bleh bleh bleh bleh bleh . My primary research focuses on computer vision, video understanding, and multi-modal deep learning.
            </div>

            <div className='bio-dscr' style={{marginTop:'1%'}}>
                During the summer of 2023, I had the incredible opportunity to join the FAIR Accel at Meta AI as a Research Scientist Intern. This followed my previous experience as a Machine Learning Intern at Comcast AI during Summer 2022. Before starting my PhD program at UNC, I gained valuable industry experience as a Software Engineer at Samsung R&D Institute. Additionally, I had the honor of serving as a lecturer at the Computer Science Department of the University of Asia Pacific.
            </div> */}

            <div className='home-elems'>
                <div className='home-elem-left'>
                    <div className='interest'>
                        Interests
                    </div>

                    <ul className='ul-int'>
                        <li className='ul-int-itm'>Video-Language Joint Tasks</li>
                        <li className='ul-int-itm'>Video Understanding</li>
                        <li className='ul-int-itm'>Computer Vision</li>
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