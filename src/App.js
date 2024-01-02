import logo from './logo.svg';
import React, { useRef } from 'react'
import './App.css';
import Topbar from './components/Topbar';
import WholePage from './components/WholePage';

function App() {
    const name = "Zaber"

    const homeComponentRef = useRef(null);
    const expComponentRef = useRef(null);
    const researchComponentRef = useRef(null);
    const compComponentRef = useRef(null);

    const scrollToHome = () => {
        window.scrollTo({
        top: homeComponentRef.current.offsetTop - 70, // Adjust this offset as needed
        behavior: 'smooth',
        });
    };
    const scrollToExp = () => {
        window.scrollTo({
        top: expComponentRef.current.offsetTop - 70, // Adjust this offset as needed
        behavior: 'smooth',
        });
    };
    const scrollToResearch = () => {
        window.scrollTo({
        top: researchComponentRef.current.offsetTop - 70, // Adjust this offset as needed
        behavior: 'smooth',
        });
    };
    const scrollToComp = () => {
        window.scrollTo({
        top: compComponentRef.current.offsetTop - 70, // Adjust this offset as needed
        behavior: 'smooth',
        });
    };


    return (
        <div className="App">
            <Topbar homePoint={scrollToHome} expPoint={scrollToExp} researchPoint={scrollToResearch} compPoint={scrollToComp}/>
            <WholePage homeRef={homeComponentRef} expRef={expComponentRef} researchRef={researchComponentRef} compRef={compComponentRef}/>
        </div>
    );
}

export default App;
