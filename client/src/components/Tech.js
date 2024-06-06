import React from 'react'
import styled from "styled-components";

const Tech = () => {
  return (
    <Section id='tech'>Tech</Section>
  )
}

export default Tech

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