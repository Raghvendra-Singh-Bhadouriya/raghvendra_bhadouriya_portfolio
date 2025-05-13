import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navigation/Navbar'
import AllRoutes from './navigation/AllRoutes'
// import Home from './pages/Home'
// import About from './pages/About'
// import Skill from './pages/Skill'
// import Project from './pages/Project'
// import Github from './pages/Github'
// import Contact from './pages/Contact'
// import { Box } from '@chakra-ui/react'
import Footer from './navigation/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>

    {/* <Box display={{base:"block", sm:"block", md:"block", lg:"none", xl:"none"}}>
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="skills">
        <Skill/>
      </section>
      <section id="projects">
        <Project/>
      </section>
      <section id="github_insights">
        <Github/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </Box> */}
    </>
  )
}

export default App
