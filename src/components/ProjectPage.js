import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import {Projects} from '../data/ProjectData'
import ProjectComponents from "./ProjectComponents";
import AnchorComponent from "../subComponents/Anchor";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width: 100vw;
`

const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const conatiner = {
    hidden: {opacity: 0},
    show: {
        opacity:1,

        transition:{
            staggerChildren:0.5,
            duration:0.5,
        }
    }
}

const ProjectPage = () => {


    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])
    return (
        <MainContainer
        variants={conatiner}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration:0.5}
        }}>
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons/>
                <AnchorComponent numbers={numbers} />
<Center>
<Grid>

{
    Projects.map(projects => {
       return <ProjectComponents key={projects.id}  projects={projects}/>
    })
}  

</Grid>
</Center>
<BigTitle text="PROJECT" top='5rem' left='5rem' />

            </Container>

        </MainContainer>
    )
}

export default ProjectPage