import React from 'react'
import './App.css'
import Header from "./Header/Header"
import Main from "./MainInfoBlock/Main"
import MySkills from "./SkillsBlock/My-skills"
import MainProjectsBlock from "./MainProjectsBlock/MainProjectsBlock"
import Contacts from "./Contacts/Contacts"
import Footer from "./Footer/Footer"
import ScrollButton from "./Assets/scrollToTop/ScrollButton";

const App = () => {
    return (
        <div className="App">
            <ScrollButton/>
            <Header/>
            <Main/>
            <MySkills/>
            <MainProjectsBlock/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App
