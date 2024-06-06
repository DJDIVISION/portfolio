import React, {useState, useEffect} from 'react'
import {motion,useAnimation} from "framer-motion";
import Typewriter from "typewriter-effect";
import {useInView} from "react-intersection-observer";
import styled from "styled-components";
import { IconButton } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {animateScroll as scroll} from "react-scroll";


const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    } else {
      setStartTyping(false)
    }
  }, [inView]);

  return (
    <Section id='about' ref={ref}>
      <Writer>
      {startTyping  === true ? (
        <Typewriter 
        options={{
          autoStart: true,
          loop: true,
          deleteSpeed: 5,
        }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Hi! I'm Victor Ramirez,")
                                .pause(750)
                                .deleteAll()
                                .typeString("a 44 year old catalan")
                                .pause(750)
                                .deleteAll()
                                .typeString("skilled Full Stack Developer.")
                                .pause(1500)
                                .deleteAll()
                                .typeString("I have six years experience ")
                                .pause(750)
                                .deleteAll()
                                .typeString("in TypeScript and JavaScript")
                                .pause(750)
                                .deleteAll()
                                .typeString("and expertise in frameworks")
                                .pause(750)
                                .deleteAll()
                                .typeString("like React, Node.js, and Three.js")
                                .pause(1500)
                                .deleteAll()
                                .typeString("I'm a quick learner")
                                .pause(750)
                                .deleteAll()
                                .typeString("and collaborate closely with clients")
                                .pause(750)
                                .deleteAll()
                                .typeString("to create efficient, scalable,")
                                .pause(750)
                                .deleteAll()
                                .typeString("and user-friendly solutions")
                                .pause(750)
                                .deleteAll()
                                .typeString("that clear real-world problems")
                                .pause(750)
                                .deleteAll()
                                .typeString("Let's work together to bring ideas to life!")
                                .pause(2000)
                                .start();
                            }}
                        />
      ) : (
        <div></div>
      )}
      </Writer>
    </Section>
  )
}

export default About

const Writer = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
`;

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    font-size: 64px;
    color: white;
    background: black;
    position: relative;
`;

const ArrowWrapper = styled(motion.div)`
    width: 100px;
    height: 100px;
    cursor: pointer;
    z-index: 9999;
    position: absolute;
    top: 85vh;
    left: 30px;
`;

const ScrollIcon = styled(ArrowCircleUpIcon)`
    &&&{
      color: white;
      transform: scale(1.5);
    }
`; 