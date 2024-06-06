import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {motion} from 'framer-motion'
import css from '../images/css3.png'
import html from '../images/html5.png'
import js from '../images/js2.png'
import type2 from "../images/type.png";
import Empty2 from "../images//empty2.png";
import node from "../images/node2.png";
import react2 from "../images/react2.png";
import pwa from "../images/pwa.png";
import express from "../images/express2.png";
import {Link as LinkR} from 'react-router-dom'

const Works = () => {

    const [fetchedData, setFetchedData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [skills, setSkills] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    

    
    
    
    

  return (
    <Section id='works'>
        <ColumnLeft>
        <SkillRow><h1>SKILLS</h1></SkillRow>
            
        </ColumnLeft>
        <ColumnRight>
        <Grid>
            <a href="https://tpv-2-0.vercel.app/register" target='_blank' aria-label="token"  ><img src={html} alt="" style={{transform: 'translateY(20px)'}}/></a>
            <a href="https://www.andradeserveis.com/" target='_blank' aria-label="cmc" ><img src={js} alt="" /></a>
            <a href="#" aria-label="coingecko"><img src={type2} alt="" /></a>
            <a href="#" aria-label="website"><img src={css} alt="" style={{transform: 'translateY(20px)'}}/></a>
            <a href="#" aria-label="Anti slippage"><img src={react2} alt="" style={{transform: 'translateY(-20px)'}}/></a>
            <a href="#" aria-label="Anti slippage"><img src={express} alt="" /></a>
            <a href="#" aria-label="Anti slippage"><img src={node} alt="" style={{transform: 'translateY(-20px)'}}/></a>
        </Grid>
        </ColumnRight>
    </Section>
  )
}

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border-radius: 50%;
    border: 1px solid grey;
    padding: 3px;
    display: grid;
    place-items: center;
    transform: translateX(-10px);
    img{
        width: 75%;
        object-fit: cover;
        display: block;
    }
`;

const Title = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1{
        color: white;
        font-size: 5vw;
    }
`;

const Skills = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: white;
        font-size: 5vw;
        transform: translateX(30px);
    }
`;

const Description = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    h1{
        color: white;
        font-size: 1.8vw;
        padding: 20px;
        transform: translateY(-10px) translateX(20px);
    }
`;

const SkillRow = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:center;
    h1{
        color: white;
        font-size: 62px;
        transform: translateX(-10px);
    }
`;

export default Works

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: black;
    position: relative;
`;

const ColumnLeft = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(20px);
    @media screen and (max-width: 768px){
        width: 100%;
        height: 30%;
    }
`;

const ColumnRight = styled(motion.div)`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 50rem;
    @media screen and (max-width: 768px){
        width: 100%;
        height: 70%;
    }
`;

const Grid = styled.div`
    display: grid;
    gap: var(--gap, 1rem);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr); 
    max-width: 70vw;
    max-height: 100vh;
    margin: 0 auto;
    transform: rotateY(-30deg) translate(-17.5%, 5%) scale(1.1);
    a {
        border-radius: 0.75em;
        transition: transform 350ms ease-in-out;
        overflow: hidden;
    }

    img,
    picture {
    max-width: 100%;
    display: block;
    }

    a:nth-child(1),
    a:nth-child(4),
    a:nth-child(5),
    a:nth-child(7){
        grid-row: span 3;
    }

    a:nth-child(2),
    a:nth-child(3){
        grid-row: span 2;
    }

    a:nth-child(6){
        grid-column: 2 / span 2;
        grid-row: 3 / span 4;
    }

    a:hover, a:focus-visible{
        transform: scale(1.05);
        //box-shadow: 0 0 1.5rem hsl(0 0% 100% / 0.8);
    }

    @media screen and (max-width: 768px){
        max-width: 100vw;
        margin: 0;
        padding: 0;
        transform: rotateY(-40deg) translate(-10%, 50%) scale(1.3);
    }
`;