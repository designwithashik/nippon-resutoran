import { Box, Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, likes, image, number_of_recipes, years_of_experience, id } = chef
    return (
        <Flex bgColor='rgba(217, 217, 217, 1)' textAlign='center' w='199px' p='23px' flexDir='column' borderRadius='full' my='30px'>
            <Image borderRadius='full' h='auto' w='full' src={image}></Image>
            <Heading fontSize='16px' my='20px'>{name}</Heading>
            <Box p='12px'  color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'><Text>Total Recipes</Text>
                <Heading fontSize='19px'>{number_of_recipes}</Heading>
            </Box>
            <Flex  mt='10px' gap='10px'>
                <Box w='full' p='12px'  color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>
                    <Heading fontSize='19px'>👍 {likes}</Heading>
                </Box>
                <Box w='full'  p='12px'  color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'><Text>{years_of_experience} Years</Text>
                    <Heading fontSize='9px'>Experience</Heading>
                </Box>
            </Flex>
            <Link to={`chef/${id}`}><Button mb='15px' mt='16px' p='25px' color='black' borderRadius='xl' bgColor='rgba(255, 105, 40, 1)'>VIEW RECIPES</Button></Link>

            
        </Flex>
    );
};

export default ChefCard;