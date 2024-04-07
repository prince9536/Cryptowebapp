import React from 'react'
import { Button, HStack } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const Header = () => {
  return ( <>
              <HStack padding={4} bgColor={'blackAlpha.900'} shadow={"base"}>
                     
                     <Button variant ={"unstyled"} color= {"white"}>
                             <Link to = "/">Home</Link>
                     </Button>

                     <Button variant ={"unstyled"} color= {"white"}>
                             <Link to = "/Coins">Coins</Link>
                     </Button>

                     <Button variant ={"unstyled"} color= {"white"}>
                             <Link to = "/Exchanges">Exchanges</Link>
                     </Button>

              </HStack>
         </>
  )
}

export default Header