import React, { useRef } from 'react'
import Home from './Home'
import Experience from './Experience'
import Research from './Research'
import Competition from './Competition'

// const homeComponentRef = useRef(null);
// const expComponentRef = useRef(null);
// const researchComponentRef = useRef(null);

// export const scrollToHome = () => {
//     window.scrollTo({
//     top: homeComponentRef.current.offsetTop - 50, // Adjust this offset as needed
//     behavior: 'smooth',
//     });
// };
// export const scrollToExp = () => {
//     window.scrollTo({
//     top: expComponentRef.current.offsetTop - 50, // Adjust this offset as needed
//     behavior: 'smooth',
//     });
// };
// export const scrollToResearch = () => {
//     window.scrollTo({
//     top: researchComponentRef.current.offsetTop - 50, // Adjust this offset as needed
//     behavior: 'smooth',
//     });
// };

const WholePage = ({homeRef, expRef, researchRef, compRef}) => {

    return (
        <div>
            <div ref={homeRef}> <Home /> </div>
            <div ref={expRef}> <Experience /> </div>
            <div ref={researchRef}> <Research /> </div>
            <div ref={compRef}> <Competition /> </div>
        </div>
    )
}

export default WholePage