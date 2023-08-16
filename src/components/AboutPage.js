import React from "react";
import styled, { ThemeProvider, keyframes } from 'styled-components'
import {DarkTheme} from './Themes';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import astronaut from '../assets/Images/spaceman.png'
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 1rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubutntu Mono', monospace;
  font-style: italic;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const mainVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={containerVariants}
        initial='hidden'
        animate='show'
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <motion.div variants={mainVariants}>
          <Main>
            As an Indian front-end developer, I specialize in crafting simple yet stunning websites with exceptional user experiences.
            <br /> <br />
            I'm an avid explorer of the frontend stack, always eager to tackle new challenges and build outstanding projects.
            <br /><br />
            I consider everything as art when approached with conscious intent. Connect with me through my social links and let's embark on a shared creative journey.
          </Main>
        </motion.div>
        <BigTitle text="ABOUT" top='10%' left='5%' />
      </Box>
    </ThemeProvider>
  );
}

export default AboutPage;
