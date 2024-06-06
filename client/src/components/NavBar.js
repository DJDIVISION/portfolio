import React, {useState, useRef, useEffect, useLayoutEffect} from 'react'
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {Link as LinkS, animateScroll as scroll} from "react-scroll";



const NavBar = () => {

  const [scrollNavDown, setScrollNavDown] = useState(false);
  const [scrollNavDownTwo, setScrollNavDownTwo] = useState(false);
  const {ref, inView} = useInView({threshold: 0.1});
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

  const changeNavDown = () => {
    if(window.scrollY >= 50) {
        setScrollNavDown(true); 
    } 
    else {
        setScrollNavDown(false)
    }
  }

  const changeNavDownTwo = () => {
    if(window.scrollY >= 650) {
        setScrollNavDownTwo(true); 
    } 
    else {
        setScrollNavDownTwo(false)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeNavDown) 
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNavDownTwo) 
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  
  useEffect(() => {
    if(inView){
        animation.start({
            opacity: 1, pathLength: 1, 
            transition: {
               duration: 1.5, ease: "easeInOut", delay: 0
            }
        });
    }
    if(!inView){
        animation.start({
            opacity: 0, pathLength: 0
        })
    }
}, [inView])

  useEffect(() => {
    if(inView){
        animation1.start({
            opacity: 1, 
            transition: {
              duration: 0.3, ease: "easeInOut", delay: 0.3
            }
        });
    }
    if(!inView){
        animation1.start({
            opacity: 0,
        })
    }
  }, [inView])

  useEffect(() => {
    if(inView){
        animation2.start({
            opacity: 1, 
            transition: {
              duration: 0.3, ease: "easeInOut", delay: 0.5
            }
        });
    }
    if(!inView){
        animation2.start({
            opacity: 0,
        })
    }
  }, [inView])

  useEffect(() => {
    if(inView){
        animation3.start({
            opacity: 1, 
            transition: {
              duration: 0.3, ease: "easeInOut", delay: 0.7
            }
        });
    }
    if(!inView){
        animation3.start({
            opacity: 0,
        })
    }
  }, [inView])

  useEffect(() => {
    if(inView){
        animation4.start({
            opacity: 1, 
            transition: {
              duration: 0.3, ease: "easeInOut", delay: 0.9
            }
        });
    }
    if(!inView){
        animation4.start({
            opacity: 0,
        })
    }
  }, [inView])

  useEffect(() => {
    if(inView){
        animation5.start({
            opacity: 1, 
            transition: {
              duration: 0.3, ease: "easeInOut", delay: 1.1
            }
        });
    }
    if(!inView){
        animation5.start({
            opacity: 0,
        })
    }
  }, [inView])

  useEffect(() => {
    console.log(scrollNavDownTwo)
  }, [scrollNavDownTwo])

  return (
    <Nav scrollNavDown={scrollNavDown} ref={ref}>
      <svg className="svgLine" width="1424" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={animation} d="M1423.5 15H712H0.5" stroke="white" strokeWidth="2"/>
      </svg>
      <LinkS to="about" smooth={true} duration={750} spy={true} exact="true"><Link1 animate={animation1} whileHover={{scale: 1.3}}><h1>ABOUT</h1></Link1></LinkS>
      <Ball animate={animation1}></Ball>
      <Ball2 animate={animation2}></Ball2>
      <LinkS to="experience" smooth={true} duration={750} spy={true} exact="true"><Link2 animate={animation2} whileHover={{scale: 1.3}}><h1>EXPERIENCE</h1></Link2></LinkS>
      
      <Ball4 animate={animation4}></Ball4>
      <LinkS to="works" smooth={true} duration={750} spy={true} exact="true"><Link4 animate={animation4} whileHover={{scale: 1.3}}><h1>SKILLS</h1></Link4></LinkS>
      <Ball5 animate={animation5}></Ball5>
      <LinkS to="contact" smooth={true} duration={750} spy={true} exact="true"><Link5 animate={animation5} whileHover={{scale: 1.3}}><h1>CONTACT</h1></Link5></LinkS>
    </Nav>
  )
}

export default NavBar





const Nav = styled.div`
  height: 80px;
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-around;
  top: ${({ scrollNavDown }) => (scrollNavDown ? "-100px" : "0")};
  opacity: 0.9;
  transition: 0.5s all ease;
  
`;

const Ball = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 94%;
  left: 10vw;
`;

const Link1 = styled(motion.div)`
  
  position: absolute;
  top: 50%;
  left: 9vw;
  text-align: center;
  cursor: pointer;
  h1{
    font-size: 1.5vw;
    color: white;
    font-weight: 400;
  }
`;

const Link2 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 27vw;
  text-align: center;
  cursor: pointer;
  h1{
    font-size: 1.5vw;
    color: white;
    font-weight: 400;
  }
`;

const Link3 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 49vw;
  text-align: center;
  cursor: pointer;
  h1{
    font-size: 1.5vw;
    color: white;
    font-weight: 400;
  }
`;

const Link4 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 68.5vw;
  text-align: center;
  cursor: pointer;
  h1{
    font-size: 1.5vw;
    color: white;
    font-weight: 400;
  }
`;

const Link5 = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 88vw;
  text-align: center;
  cursor: pointer;
  h1{
    font-size: 1.5vw;
    color: white;
    font-weight: 400;
  }
`;

const Ball2 = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 94%;
  left: 30vw;
`;

const Ball3 = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 94%;
  left: 50vw;
`;

const Ball4 = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 94%;
  left: 70vw;
`;

const Ball5 = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 94%;
  left: 90vw;
`;





