import styled from "styled-components";
import React, {useState, useRef, useEffect, useLayoutEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import { expData } from "../data/expData";
import {Link as LinkR} from 'react-router-dom'


const Experience = () => {

  const [width, setWidth] = useState(0);
  const carroussel = useRef();

  useEffect(() => {
    //console.log(carroussel.current.scrollWidth, carroussel.current.offsetWidth);
    setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
}, [])

  return (
    <Section id='experience'>
      <Carousel ref={carroussel}>
      <InnerCarousel drag="x" dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}}>
          {expData.map(el => {
            return(
              <Card style={{background: `url(${el.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: '50% 80%'}}>
                <Title>{el.company}</Title>
                <Rows style={{fontSize:'30px'}}> {el.title} </Rows>
                <Rows style={{transform: 'translateY(-20px)'}}>( {el.time} )</Rows>
                <Filter>
                  <BigRow>
                    <Desc>{el.desc1}</Desc>
                    <DescTwo>
                      <div>{el.skill1}</div>
                      <div>{el.skill2}</div>
                      <div>{el.skill3}</div>
                    </DescTwo>
                    <DescTwo>
                      <div>{el.skill4}</div>
                      <div>{el.skill5}</div>
                      <div>{el.skill6}</div>
                    </DescTwo>
                  </BigRow>
                  <Links>
                  <LinkR to={`${el.link1}`} target='_blank'><h1>{el.link1}</h1></LinkR>
                  <LinkR to={`${el.link2}`} target='_blank'><h1>{el.link2}</h1></LinkR>
                  </Links>
                </Filter>
              </Card>
            )
          })}
      </InnerCarousel>
      </Carousel>
    </Section>
  )
}



export default Experience

const DescTwo = styled.div`
  width: 90%;
  height: 25%;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Desc = styled.div`
  width: 90%;
  height: 40%;
  font-size: 32px;
  display: grid;
  place-items: center;
  text-align: center;
`;

const BigRow = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  h1{
    color: gold;
    font-size: 18px;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 55%;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-5px);
`;

const Card = styled.div`
  min-width: 700px;
  height: 100%;
  border: 1px solid white;
  margin: 0 40px;
  
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

const Carousel = styled(motion.div)`
    cursor: grab;
    height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    //background: ${props => props.theme.horizontalBlue};
    
    
`;

const InnerCarousel = styled(motion.div)`
    display: flex;
    align-items: center;
    height: 90vh;
    width: 100%;
    padding: 40px;
`;

const Title = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: 64px;
  transform: translateY(10px);
`;

const Rows = styled.div`
  width: 100%;
  height: 10%;
  font-size: 24px;
  display: grid;
  place-items: center;
  transform: translateY(-10px);
`;