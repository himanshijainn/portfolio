import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';



const Box = styled(motion.li)`
width: 16rem;
height: 50vh;
background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
margin-bottom: 1rem;
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla', sans-serif;
font-weight: 500;
margin-bottom: 2rem;

`

const Tags   = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text};
}
`

const Tag = styled.span`
margin-right:1rem;
font-size: calc(0.8em + 0.3vw);
margin-bottom: 1rem;
`

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 40%;
  height: 200%; /* Set height to auto to maintain aspect ratio */
  border: 1px solid transparent;



${Box}:hover &{
    border: 1px solid ${props => props.theme.body};
}
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
` 

const Duration = styled.span`
font-size: calc(0.8em + 0.5vw);
 `

 const Items = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
 }


const Card = (props) => {

    const {id, name, description, tags, company,duration, link } = props.data;
  return (
    <Box key={id} variants={Items}>
        <Title>{name} </Title>
        <Description>{description}</Description>
        <Tags>
            {
                tags.map((t,id) => {
                    return <Tag key={id}>#{t}</Tag>
                })
            }
        </Tags>
        <ImageWrapper >
       
        <Image target="_blank" to={{ pathname: link }} img={company} />
        
        <Duration>
            {duration}
        </Duration>

        </ImageWrapper>
            
        
    </Box>
  )
}

export default Card