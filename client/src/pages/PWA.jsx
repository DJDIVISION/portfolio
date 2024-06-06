import React from 'react'
import styled from 'styled-components'
import { animationTwo, transition } from "../animations";
import { motion } from 'framer-motion'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const PWA = () => {

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

  return (
    <ThemeProvider theme={darkTheme}>
        <motion.div initial="out" animate="in" variants={animationTwo} transition={transition}>
            <Section>

            </Section>
        </motion.div>
    </ThemeProvider>
  )
}

export default PWA

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: black;
    overflow: hidden;
`;