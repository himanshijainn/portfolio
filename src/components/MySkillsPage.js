import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion";
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from '../subComponents/BigTitle';

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.5em + 1vw);
  padding: 0.5em 0;
  align-items: center;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.8
      
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0,  transition: { duration: 0.8} }
}

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main variants={item}>
          <Title>
            <Design width={40} height={40} /> UI/UX Designer
          </Title>
          <Description>
            I'm passionate about crafting designs that communicate effortlessly, embodying cleanliness, minimalism, and simplicity.
          </Description>
          <Description>
            <strong> I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong> TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>

        <Main variants={item}>
          <Title>
            <Develope width={40} height={40} /> Frontend Developer
          </Title>
          <Description>
            I'm passionate about turning innovative ideas into reality for businesses or brands I'm entrusted with.
          </Description>
          <Description>
            <strong> SKILLS </strong>
            <p>
              Html, Css, Javascript, React, Sass, Bootstrap.
            </p>
            <strong> TOOLS </strong>
            <p>
              VScode, Github, etc..
            </p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" left="30%" />
      </Box>
    </ThemeProvider>
  );
}

export default MySkillsPage;
