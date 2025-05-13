import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Project from "../pages/Project"
import Github from "../pages/Github"
import Contact from "../pages/Contact"
import { Box } from "@chakra-ui/react"
import Resume from "../pages/Resume"

const AllRoutes = () => {
    return(
        <>
        {/* <Box display={{base:"none", sm:"none", md:"none", lg:"block", xl:"block"}}> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skill/>} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/github_insights" element={<Github/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/resume" element={<Resume/>} />
        </Routes>
        {/* </Box> */}
        </>
    )
}

export default AllRoutes ;