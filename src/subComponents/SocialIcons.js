import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Instagram, Twitter, Linkedin} from '../components/AllSvgs'
import styled from 'styled-components'
import { DarkTheme} from '../components/Themes'
import { motion } from 'framer-motion'



const Icons = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;

&>*: not(:last-child){
    margin: 0.2rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`
const SocialIcons = (props) => {
  return (
    <Icons>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring", duration:1, delay:1}}
        >
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/himanshijainn"}}>
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring", duration:1, delay:1.2}}>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:" https://twitter.com/__himanshiiii?t=2ztAjBGuWE93NcaeckPOAg&s=08"}}>
                <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring", duration:1, delay:1.4}}>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/amaya.sharma.7982"}}>
                <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>
        
        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring", duration:1, delay:1.6}}>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://instagram.com/himanshiii.jain?igshid=MzRlODBiNWFlZA=="}}>
                <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>

        <motion.div
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:"spring", duration:1, delay:1.6}}>
            <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://www.linkedin.com/in/himanshi-jain-a589691b5"}}>
                <Linkedin width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body } />
            </NavLink>
        </motion.div>

        <Line color={props.theme}
        initial={
            {
                height:0
            }
        }
        animate={{
            height:'8rem'
        }}
        transition={{
            type: 'spring', duration: 1, delay:0.8        }} />
    </Icons>
  )
}

export default SocialIcons