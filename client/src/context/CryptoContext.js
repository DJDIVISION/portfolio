import React, { useEffect } from 'react'
import { createContext, useContext, useState } from "react"
import axios from 'axios'

const Crypto = createContext()



const CryptoContext = ({children}) => {

  const [currency, setCurrency] = useState("usd");
  const [symbol, setSymbol] = useState("$");
  const [cryptos, setCryptos] = useState([]);
  const [selected, setSelected] = useState("bitcoin");
  const [cryptoData, setCryptoData] = useState([]);
  const [dataSelected, setDataSelected] = useState([]);
  const [days, setDays] = useState(1);

  const historicalChart = (selected, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${selected}/market_chart?vs_currency=${currency}&days=${days}`;

  const singleCoin = (selected) =>
  `https://api.coingecko.com/api/v3/coins/${selected}`;
  

  useEffect(() => {
    if (currency === "usd") setSymbol("$");
    else if (currency === "inr") setSymbol("₹");
    else if (currency === "eur") setSymbol("€");
    else if (currency === "gbp") setSymbol("£");
  }, [currency]);

 

  /* useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false, { crossDomain: true }`;
    axios.get(url).then((response) => {
      setCryptos(response.data);
      console.log(cryptos);
    });
  }, []);

  useEffect(() => {
    axios.get(singleCoin(selected)).then((response) => {
      setCryptoData(response.data);
      console.log(cryptoData);
    });
  }, []);

  useEffect(() => {
    axios.get(historicalChart(selected, days, currency)).then((response) => {
      setDataSelected(response.data.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) })));
      console.log(dataSelected);
    });
  }, []); */

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol, cryptos, setCryptos, selected, setSelected, dataSelected, setDataSelected,
      cryptoData, setCryptoData}}>
        {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
  };