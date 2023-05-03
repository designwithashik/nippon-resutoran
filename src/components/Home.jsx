import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Image, ScaleFade, useDisclosure } from '@chakra-ui/react';
import ChefCard from './chefs/ChefCard';

/**
 * 
 *  https://i.ibb.co/x2DbHWH/Ellipse-1.png
https://i.ibb.co/QrFZ8bV/png-transparent-ripe-lemons-juice-soft-drink-lemonade-fruit-lemon-natural-foods-food-dried-fruit-rem.png
 */

const Home = () => {
    const bowl = 'https://i.ibb.co/x2DbHWH/Ellipse-1.png'
    const lemon = 'https://i.ibb.co/QrFZ8bV/png-transparent-ripe-lemons-juice-soft-drink-lemonade-fruit-lemon-natural-foods-food-dried-fruit-rem.png'
    const {chefs} = useContext(AuthContext);
    console.log(chefs)
    const { isOpen, onToggle } = useDisclosure()
    useEffect(() => {
        onToggle()
    }, [])
    return (
        <div>

            <Flex>

                <Box ml='83px' mb='102px' mt='41px'>
                    <ScaleFade initialScale={2.9} in={isOpen}>
                        <Image src={bowl}></Image>
                    </ScaleFade>
                </Box>

                <Flex ml='auto' mr='164px' flexDir='column' gap='10px' justifyContent='center'>
                    <Heading >TASTE OUR</Heading><Heading>DELICIOUS</Heading><Heading> NIPPON FOODS</Heading>
                    <Flex justifyContent='center'><Button mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>ORDER NOW</Button></Flex>
                </Flex>     

            </Flex>

            <Box>
                <Heading textAlign='center'>MOST POPULAR CHEFS</Heading>
                <Flex flexWrap='wrap' justifyContent='space-evenly'>
                {chefs.map(chef=><ChefCard key={chef.id} chef={chef}></ChefCard>)}
                </Flex>
            </Box>

        </div>
    );
};

export default Home;