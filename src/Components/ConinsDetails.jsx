// import React, { useEffect, useState } from 'react'
// import {Container, Box} from '@chakra-ui/react';
// import Loader from './Loader';
// import {useparams} from 'react-router-dom';


const ConinsDetails = () => {

  // const params = useparams();
  // const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [page,setPage] = useState(1);
  // const [currency, setCurrency] =useState("inr");

  

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     try {
  //       const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`);
  //       setCoins(data);

  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setLoading(false);
  //     }

  //   };
  //   fetchCoins();
  // }, [params.id]); 


  return ( <Container maxW = {"Container.xl"} >
        { loading ? (
          <Loader />  
        ) :

        (<>
           <Box width={"full"} borderWidth = {1}>
                I am prince 
           </Box>
         
         </>)

        }
  </Container>
  )
}

export default ConinsDetails