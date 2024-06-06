import axios from "axios";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/cryptoApi";
import { Line } from "react-chartjs-2";
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SelectButton from "./SelectButton";
import { chartDays } from "../../config/cryptoData";
import { CryptoState } from "../../context/CryptoContext";

const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

const CoinInfo = ({ coin }) => {
  
 
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        
      </Container>
    </ThemeProvider>
  );
};

export default CoinInfo;

const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      padding: 40px,
`;