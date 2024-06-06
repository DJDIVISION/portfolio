import React, {useEffect} from 'react'
import styled from "styled-components";
import {motion,useAnimation} from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import EmailIcon from '@mui/icons-material/Email';
import {IconButton} from "@mui/material";
import Telegram from "./SVG/telegram.svg"
import Whatsapp from "./SVG/whatsapp.svg"
import {useInView} from "react-intersection-observer";
import Gmail from "./SVG/gmail.svg"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ContainerVariants = {
  start: {
      transition: {
        staggerChildren: 0.4
      }
  },
  end: {
      transition: {
         staggerChildren: 0.4
      }
  }
};



const Contact = () => {

  const animation = useAnimation();
  const animationTwo = useAnimation();
  const animationThree = useAnimation();
  const animationFour = useAnimation();
  const animationFive = useAnimation();

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    if(inView){
        animation.start({
            scale: 1, opacity: 1,
            transition: {
              duration: 0.25,
              type: 'tween',
              delay: 0.5,
            }
        });
    }
    
  
    if(!inView){
        animation.start({
            scale: 0, opacity: 0,
        })
    }
    
  }, [inView])

  useEffect(() => {
    if(inView){
      animationTwo.start({
           x: '0', opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 40,
              delay: 0.25,
            }
        });
    }
    
  
    if(!inView){
      animationTwo.start({
           x: '-100vw', opacity: 0,
        })
    }
    
  }, [inView])

  useEffect(() => {
    if(inView){
      animationThree.start({
            scale: 1, opacity: 1,
            transition: {
              duration: 0.25,
              type: 'tween',
              delay: 0.75,
            }
        });
    }
    
  
    if(!inView){
      animationThree.start({
            scale: 0, opacity: 0,
        })
    }
    
  }, [inView])

  useEffect(() => {
    if(inView){
      animationFour.start({
            scale: 1, opacity: 1,
            transition: {
              duration: 0.25,
              type: 'tween',
              delay: 1,
            }
        });
    }
    
  
    if(!inView){
      animationFour.start({
            scale: 0, opacity: 0,
        })
    }
    
  }, [inView])

  useEffect(() => {
    if(inView){
      animationFive.start({
            scale: 1, opacity: 1, y: '-20px',
            transition: {
              duration: 0.25,
              type: 'tween',
              delay: 1.50,
            }
        });
    }
    
  
    if(!inView){
      animationFive.start({
            scale: 0, opacity: 0, y: '-20px'
        })
    }
    
  }, [inView])

  return (
    <Section id='contact' ref={ref}>
      <Title animate={animationTwo}>If you have any question or would like more information please contact me by email or send me a message.</Title>
            <Mail>
                <a href="mailto:bodegaflamenca666@gmail.com"><motion.span animate={animation}><img src={Gmail} alt="Gmail"/></motion.span></a>
                <a href="mailto:bodegaflamenca666@gmail.com"><motion.h1 animate={animation}>bodegaflamenca666@gmail.com</motion.h1></a>
            </Mail>
            <SmallTitle></SmallTitle>
            <IconHolder  variants={ContainerVariants} initial='start' animate='end'>
                <a href="https://t.me/VictorJRamirez" target="_blank" rel="noreferrer"><motion.span animate={animationThree} ><img src={Telegram} alt="Telegram"/></motion.span></a>
                <a href="https://wa.me/+34692926422" target="_blank" rel="noreferrer"><motion.span animate={animationFour} ><img src={Whatsapp} alt="Github"/></motion.span></a>
            </IconHolder>
            <Copyright>
                <IconColumn>
                <FooterRow style={{width: '90%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    
                    </FooterRow>
                    {/* <FooterRow>
                    <a href="https://www.telos.net/legal" target="_blank" rel="noreferrer"><FooterText>Legal</FooterText></a>
                    <a href="https://www.telos.net/news/telos-roadmap-2022-beyond" target="_blank" rel="noreferrer"> <FooterText>Telos Technical Roadmap 2022</FooterText></a>
                    <a href="https://www.telos.net/privacy-policy" target="_blank" rel="noreferrer"><FooterText>Privacy Policy</FooterText></a>
                    </FooterRow> */}
                    <FooterRow style={{justifyContent: 'center', width: '70%'}}>
                        <FooterText animate={animationFive}>© 2024 Victor J. Ramirez</FooterText> 
                    </FooterRow>
                    
                </IconColumn>
            </Copyright>
    </Section>
  )
}

export default Contact

const Section = styled(motion.div)`
    height: 100vh;
    //background: linear-gradient(180deg, rgba(16,17,96,1) 56%, rgba(0,0,0,1) 100%);
    background: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @media screen and (max-width:768px){
        height: 140vh;
    }
    
    
`;

const Title = styled(motion.div)`
    height: 30vh;
    color: white;
    font-size: 48px;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 760px){
        font-size: 18px;
        height: 20vh;
        padding: 0px 20px;
    }
`;

const SmallTitle = styled(motion.div)`
    height: 10vh;
    color: white;
    font-size: 48px;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    @media screen and (max-width: 760px){
        font-size: 18px;
        height: 20vh;
        padding: 0px 20px;
    }
`;

const Mail = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: translateY(40px);
    h1{
      color: #c2c2c2;
      font-size: 20px;
      font-weight: 200;
    }
    span{
        display: flex;
        width: 85px;
        height: 85px;
        background: indigo;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
        @media screen and (max-width: 768px){
            width: 50px;
            height: 50px;
            
        }
    }
    span img{
      width: 70%;
      display: block;
      object-fit: cover;
    }
`;

const IconMail = styled(EmailIcon)`
    color: white;
`;

const IconHolder = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 30vh;
    justify-content: space-around;
    @media screen and (max-width:768px){
        height: 100vw;
        width: 70vh;
        transform: rotate(90deg) scale(0.9);
        align-items: center;
    }
    span{
        display: flex;
        width: 85px;
        height: 85px;
        background: indigo;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 768px){
            width: 50px;
            height: 50px;
        }
        
    }
    span img{
        width: 100%;
        display: block;
        object-fit: cover;
        cursor: pointer;
        @media screen and (max-width: 768px){
            transform: rotate(-90deg);
        }
    }
`;

const Copyright = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    @media screen and (max-width:768px){
        width: 80%;
        height: 20vh;
        padding-top: 50px;
    }
`;

const IconColumn = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const ArrowHome = styled(KeyboardDoubleArrowUpIcon)`
    color: white;
`;



const FooterText = styled(motion.div)`
    display: flex;
    font-size: 24px;
    color: white;
    
    @media screen and (max-width:768px){
        font-size: 14px;
        text-align: center;
    }
`;

const FooterRow = styled.div`
    height: 50%;
    width: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
`;
