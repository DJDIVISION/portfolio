import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import styled from "styled-components";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { motion } from 'framer-motion'
import moment from "moment";
import { HashLink } from 'react-router-hash-link';
import { chartDays } from "../config/cryptoData";
import SelectButton from "../components/apicalls/SelectButton";
import { animationTwo, transition } from "../animations";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CryptoState } from "../context/CryptoContext";
import WebIcon from '@mui/icons-material/Web';
import { CoinList } from '../config/cryptoApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import HomeIcon from '@mui/icons-material/Home';

const Web = styled(WebIcon)`
  &&&{
    color: white;
    display: flex;
    margin: auto 0px;
    margin-right: 10px;
  }
`;

const Home = styled(HomeIcon)`
  &&&{
    color: white;
    display: flex;
    margin-left: 20px;
    //margin-right: auto;
  }
`;


export default function APICalls() {

    const [loading, setLoading] = useState(false);
    const { currency, setCurrency} = CryptoState();    
    const { cryptos, setCryptos} = CryptoState();    
    const { symbol} = CryptoState();    
    const {selected, setSelected} = CryptoState();
    const {dataSelected, setDataSelected} = CryptoState();
    const {cryptoData, setCryptoData} = CryptoState();
    const [error, setError] = useState(false);
    const [days, setDays] = useState(1);
    const [flag,setflag] = useState(false);

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
 
      console.log(dataSelected);
      console.log(selected);
      console.log(cryptoData);

      const setNewData = async (e) => {
        const c = (e.target.value);
        console.log(c);
        const url = `https://api.coingecko.com/api/v3/coins/${c}/market_chart?vs_currency=${currency}&days=${days}`;
        const newData = await axios.get(url);
        const pd = (newData.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })));
        setDataSelected(pd);
        const url2 = `https://api.coingecko.com/api/v3/coins/${c}`;
        const res = await axios.get(url2);
        console.log(res.data);
        setCryptoData(res.data);
      }

      const setNewDays = async (day) => {
        const url = `https://api.coingecko.com/api/v3/coins/${selected}/market_chart?vs_currency=${currency}&days=${day.value}`;
        const newData = await axios.get(url);
        const pd = (newData.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })));
        setDataSelected(pd);
      }

      const options = {
        responsive: true
      }
      const data = {
        labels: dataSelected.map(value => moment(value.x).format('MMM DD')),
        datasets: [
          {
            fill: true,
            label: cryptoData.id,
            data: dataSelected.map(val => val.y),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          }
        ]
      }

  return (
    <ThemeProvider theme={darkTheme}>
    <motion.div initial="out" animate="in" variants={animationTwo} transition={transition}>
        <Section>
       {/*  <Header>
        <HashLink to="/#works"><Home /></HashLink>
          <HeaderWrapper style={{transform: 'translateX(300px)'}}>
            
            <Text>CHOOSE CRYPTO</Text>
            <Select
                variant="outlined"
                style={{ width: 200, height: 40, fontFamily: "Dosis" }}
                value = {selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                  setNewData(e);
                  
                }}
                
             >
             {cryptos ? cryptos.map((crypto) => {
                return(
                  <MenuItem key={crypto.id} value={crypto.id} style={{fontFamily: "Dosis"}}>{crypto.name}</MenuItem>
                );
              }) : null}
             </Select>
             </HeaderWrapper>
             <HeaderWrapper>
             <Text>CHOOSE CURRENCY</Text>
             <Select
                variant="outlined"
                value={currency}
                style={{ width: 100, height: 40, fontFamily: "Dosis" }}
                onChange={(e) => setCurrency(e.target.value)}
             >
              <MenuItem value={"usd"} style={{fontFamily: "Dosis"}}>USD</MenuItem>
              <MenuItem value={"eur"} style={{fontFamily: "Dosis"}}>EURO</MenuItem>
              <MenuItem value={"gbp"} style={{fontFamily: "Dosis"}}>GBP</MenuItem> 
              <MenuItem value={"inr"} style={{fontFamily: "Dosis"}}>INR</MenuItem>
             </Select>
             </HeaderWrapper>
         </Header>
        <Wrapper>
            <ColumnLeft>
                <Logo><img src={cryptoData?.image.large} alt="logo" /></Logo>
                <Name>{cryptoData.name} ( {cryptoData.symbol} )</Name>
                <Row>CURRENT PRICE: {symbol}{" "}
              {numberWithCommas(
                cryptoData?.market_data.current_price[currency.toLowerCase()]
              )}</Row>
                <Row>RANK: #{cryptoData.coingecko_rank}</Row>
                <Row>MARKET CAP: {symbol}{" "}
              {numberWithCommas(
                cryptoData?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}</Row>
                <Row><Web />{cryptoData.links.homepage}</Row>
                <Desc>{ReactHtmlParser(cryptoData?.description.en.split(". ")[0])}.</Desc>
            </ColumnLeft>
            <ColumnRight>
            <Line options={options} data={data} style={{marginTop: "10px"}}/>
            <div style={{display: "flex", justifyContent: "space-between", width: "80%", marginTop: "20px"}}>
            {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setNewDays(day)}
                  buttonSelected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
              </div>
            </ColumnRight>
        </Wrapper> */}
        </Section>
    </motion.div>
    </ThemeProvider>
  )
}

const HeaderWrapper = styled.div`
  height: 100%;
  width: 350px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 30px;
`;

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: black;
    overflow: hidden;
`;

const ColumnLeft = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid orange;
    
`;

const ColumnRight = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid orange;
    padding: 20px;
    
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
`;

const Header = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    color: white;
    font-size: 16px;
    margin-right: 20px;
    display: flex;
    margin-left: auto;
`;

const Logo = styled.div`
  height: 250px;
  width: 100%;
  display: grid;
  place-items: center;
  img{
    width: 50%;
  }
`;

const Name = styled.div`
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 32px;
  color: gold;
  text-transform: uppercase;
  text-align: center;
  display: grid;
  place-items: center;
  border: 1px solid gold;
  margin-bottom: 30px;
`;

const Row = styled.div`
  width: 100%;
  height: 30px;
  font-weight: bold;
  font-size: 22px;
  color: white;
  margin-left: 50px;
  display: flex;
`;

const Desc = styled.div`
  width: 90%;
  height: 100px;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-left: 10px;
  display: flex;
  text-align: justify;
  margin-top: 20px;
`;
