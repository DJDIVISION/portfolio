import React from 'react';
import HTMLReactParser from "html-react-parser"
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import {Link as LinkR} from 'react-router-dom'
import { CryptoState } from "../context/CryptoContext";
import { CoinList } from "../config/cryptoApi";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 50px;
`;

const Header = styled.div`
    width: 95vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Text = styled.div`
    color: white;
    font-size: 16px;
    margin-right: 20px;
    display: flex;
    margin-left: auto;
`;

const Token = styled.div`
   width: 100%; 
   height: 25%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: whitesmoke;
   font-size: 18px;
`;

const Price = styled.div`
    width: 100%; 
   height: 25%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: whitesmoke;
   font-size: 18px;
`;

const ChartHeader = ({coin}) => { 

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();
  const { currency, setCurrency } = CryptoState();
  
  const fetchCoins = async() => {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      console.log(data);
      setCryptos(data);
  }

  useEffect(() => {
      fetchCoins();
  }, [currency]);

  console.log(selected);

  return (
    <ThemeProvider theme={darkTheme}>
      <Section>
         <Header>
           
            
             <Text>CHOOSE CURRENCY</Text>
             <Select
                variant="outlined"
                value={currency}
                style={{ width: 100, height: 40, marginRight: 15, fontFamily: "Dosis" }}
                onChange={(e) => setCurrency(e.target.value)}
             >
              <MenuItem value={"usd"} style={{fontFamily: "Dosis"}}>USD</MenuItem>
              <MenuItem value={"eur"} style={{fontFamily: "Dosis"}}>EURO</MenuItem>
              <MenuItem value={"gbp"} style={{fontFamily: "Dosis"}}>GBP</MenuItem> 
              <MenuItem value={"inr"} style={{fontFamily: "Dosis"}}>INR</MenuItem>
              
             </Select>
         </Header>
      </Section>
     
      </ThemeProvider>
  )
};

export default ChartHeader;