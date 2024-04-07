import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  RadioGroup,
  Radio,  
  HStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponents";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency, setCurrency] =useState("inr");
 
 const currencySymbol = 
                   currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
 
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
           <RadioGroup padding={4} value="currency" onChange={setCurrency}>
                        <HStack spacing={4}>
                                 <Radio value="inr">INR</Radio>
                                 <Radio value="usd" >USD</Radio>
                                 <Radio value="eur">EUR</Radio>
                        </HStack>
            </RadioGroup> 
          
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
              id ={i.id}
              img={i.image}
              price={i.current_price}
              symbol = {i.symbol}
              currencySymbol = {currencySymbol}
              name = {i.name}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};



export default Coins;
