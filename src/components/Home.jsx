import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Box, Button, Card, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import ChefCard from './chefs/ChefCard';

/**
 * 
 *  https://i.ibb.co/x2DbHWH/Ellipse-1.png
https://i.ibb.co/QrFZ8bV/png-transparent-ripe-lemons-juice-soft-drink-lemonade-fruit-lemon-natural-foods-food-dried-fruit-rem.png
 */

const Home = () => {
    const bowl = 'https://i.ibb.co/x2DbHWH/Ellipse-1.png'
    const lemon = 'https://i.ibb.co/QrFZ8bV/png-transparent-ripe-lemons-juice-soft-drink-lemonade-fruit-lemon-natural-foods-food-dried-fruit-rem.png'
    const signature_dish = 'https://i.ibb.co/NFXc8Vm/Ellipse-12.png'
    const client1 = 'https://i.ibb.co/j8WFkzT/Ellipse-14.png'
    const client2 = 'https://i.ibb.co/BZpSPsg/Ellipse-15.png'
    
    const { chefs, loading } = useContext(AuthContext);
    

    if (loading) {
        return (<Flex justifyContent='center' alignItems='center' h='80vh'>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        /></Flex>)
    }
    return (

        <><Flex gap='30px' flexDir={{ base:'column', md: 'row'}} px={{base:'20px', md: '100px', lg: '165px'}} mb='120px' py='41px' bgColor='rgba(255, 105, 40, 1)' borderBottomRadius={{md:'35%'}} justifyContent={{base:'center',md:'space-evenly'}} >

            <Flex h='100%' justifyContent='center' w='100%'>
                <Image w='45%' src={bowl}></Image>
            </Flex>

            <Flex textAlign={{base: 'center', md:'left'}} w='100%'  flexDir='column' gap='10px' justifyContent='center'>
                <Heading >TASTE THE</Heading><Heading>DELICIOUS</Heading><Heading> NIPPON FOODS</Heading>
                <Flex justifyContent={{base: 'center',md:'flex-start'}}><Button mt='16px' borderRadius='3xl' >ORDER NOW</Button></Flex>
            </Flex>

        </Flex>


            <Box px={{base:'20px', md: '100px', lg: '165px'}}>
                <Heading textAlign='center'>MOST POPULAR CHEFS</Heading>
                <Flex flexWrap='wrap' gap='30px' justifyContent='space-evenly'>
                    {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
                </Flex>
            </Box>


            <Box my='120px' textColor='white' py='40px' px={{base:'20px', md: '100px', lg: '165px'}} bgColor='rgba(31, 31, 31, 1)'>
                <Heading fontWeight='medium' textAlign='center'>Simplest Way <br />
                    Of  Eating Delicious Japanese Foods Abroad
                </Heading>
                <Text fontWeight='light' my='30px' mx={{ lg: '200px' }} textAlign='left'>People love Japanese food More. A japanese-food cuisine consists of a business model that serves food usually prepared specifically. A well maintained japanese cuisine has a purpose of satisfying the hunger and the needs of a customer. We are dedicated to serve that purpose. </Text>
            </Box>

            <Flex gap='30px' flexDir={{ base:'column', md: 'row'}} px={{base:'20px', md: '100px', lg: '165px'}}>
                <Flex w='100%' flexDir='column' gap='10px' justifyContent='center'>
                    <Heading >OUR</Heading><Heading>THE BEST</Heading><Heading color='rgba(255, 105, 40, 1)'> SIGNATURE DISH</Heading>
                    <Text fontWeight='bold'>Our cuisine has a purpose of satisfying the hunger and the needs of a customer. We are dedicated to serve that purpose.</Text>
                    <Flex><Button mt='16px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>ORDER NOW</Button></Flex>
                </Flex>
                <Flex flexDir='column' alignItems='center' justifyContent='center' w='full' mt='41px'>
                    <Image w='35%' src={signature_dish}></Image>
                    <Heading  mt='30px'>Gyudon</Heading>
                </Flex>
            </Flex>


            <Box mt='240px'   px={{base:'20px', md: '100px', lg: '165px'}} py='100px'  position='relative' bgColor='rgba(255, 226, 212, 1)'>
                <Image position='absolute' top={{ base:'-130px', md:'-100px'}} src={lemon}></Image>
                <Heading fontWeight='bold' textAlign='center'>Client Feedback
                </Heading>
               
            </Box>
            <Box mt='30px' mb='120px'>
            <Flex gap='30px' flexDir={{ base: 'column', md: 'row' }} flexWrap={{ base: 'wrap', md: 'nowrap' }} px={{ base: '20px', md: '100px', lg: '165px' }} bottom={{ base:'195px',md:'125px'}} justifyContent='space-evenly'>
                    <Card w={{base:'75%',md:'30%'}} bgColor='rgba(255, 105, 40, 1)' p='10px' borderRadius='xl' position='relative'>
                        <Image position='absolute' h='40px' w='40px' left='5' top='-5' src={client1}></Image>
                        <Text mt='19px' fontSize={{ base: 'sm', lg:'md'}} fontWeight='light' color='white'>Ongoing employee feedback is key to moving away from outdated performance reviews and towards driving employee development. Employee feedback is information given about a person's actions or accomplishments at work, which is then used to guide future improvement.</Text>
                    </Card>
                    <Card  w={{base:'75%',md:'30%'}} bgColor='rgba(0, 0, 0, 0.9)' p='10px' borderRadius='xl' position='relative'>
                        <Image position='absolute' h='40px' w='40px' left='5' top='-5' src={client2}></Image>
                        <Text mt='19px' fontWeight='light' fontSize={{ base: 'sm', lg:'md'}} color='white'>Ongoing employee feedback is key to moving away from outdated performance reviews and towards driving employee development. Employee feedback is information given about a person's actions or accomplishments at work, which is then used to guide future improvement.</Text>
                    </Card>
                </Flex>
            </Box>
        </>
            
    )


};

export default Home;