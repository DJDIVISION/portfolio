import React, {useEffect, useState, useRef} from 'react'
import styled from "styled-components"
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import { IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {animateScroll as scroll} from "react-scroll";
import Experience from '../components/Experience'
import Tech from '../components/Tech'
import Works from '../components/Works'
import Contact from '../components/Contact'
import { animationFour, transition } from "../animations";
import { motion } from 'framer-motion'

function Home () {

  
  const ref = useRef();

  
  

  return (

    <motion.div initial="out" animate="in" variants={animationFour} transition={transition} ref={ref}>
    
    <HeroSection />
    <About />
    <Experience />
    <Works />
    <Contact />
    
    </motion.div>
  )
}

export default Home





