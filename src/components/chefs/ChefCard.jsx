import { Box, Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, likes, image, number_of_recipes, years_of_experience, id } = chef
    return (
        <Flex position='relative' border='1px solid rgba(255, 105, 42, 1)' bgColor='rgba(217, 217, 217, 1)' textAlign='center' w='199px' p='23px' flexDir='column' borderRadius='full' my='30px'>
            <LazyLoad height='100%' offset={270}><Image borderRadius='full' h='auto' w='full' src={image}></Image></LazyLoad>
            
            <Heading fontSize='16px' my='20px'>{name}</Heading>
            <Box p='12px'  color='white' borderRadius='xl' bgColor='rgba(255, 105, 40, 1)'><Text>Total Recipes</Text>
                <Heading fontSize='19px'>{number_of_recipes}</Heading>
            </Box>
            <Flex mt='10px' mb='30px' gap='10px'>
                <Box w='full' p='12px'  color='white' borderRadius='xl' bgColor='rgba(255, 105, 40, 1)'>
                    <Heading fontSize='19px'>👍 {likes}</Heading>
                </Box>
                <Box w='full' color='white' p='12px'   borderRadius='xl' bgColor='rgba(255, 105, 40, 1)'><Heading fontSize='14px'>{years_of_experience} Years</Heading>
                    <Heading fontSize='9px'>Experience</Heading>
                </Box>
            </Flex>
            <Link to={`chef/${id}`}><Button bottom='-17' right='5' left='5' color='white' position='absolute'  p='25px' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>VIEW RECIPES</Button></Link>

            
        </Flex>
    );
};

export default ChefCard;