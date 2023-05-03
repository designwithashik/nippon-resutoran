import React from 'react';
import { Box, Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {
    const customStyles = {
        itemShapes: ThinStar,
        activeFillColor: 'rgba(255, 105, 40, 1)',
        inactiveFillColor: 'rgba(255, 105, 40, .4)',


    }
    const { cooking_method, ingredients, id, name, rating } = recipe;
    return (
        <div>
              <Flex height='90%' position='relative' border='1px solid rgba(255, 105, 42, 1)' bgColor='rgba(217, 217, 217, 1)' textAlign='center' w='199px' p='23px' flexDir='column' borderRadius='full' my='30px'>
            <Heading fontSize='20px' my='20px'>{name}</Heading>
            <Box p='12px'  color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'><Text fontWeight='bold'>Ingredients</Text>
                <Heading fontSize='9px'>{ingredients}</Heading>
            </Box>
            <Box mb='auto' p='12px' borderRadius='3xl' ><Text fontWeight='bold'>Cooking Method</Text>
                <Heading fontSize='9px'>{cooking_method}</Heading>
            </Box>
            <Box mb='30px'><Rating itemStyles={customStyles} style={{ maxWidth: 250 }} value={rating} readOnly /></Box>
            
           <Button bottom='-17' right='5' left='5' position='absolute'  p='25px' color='black' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>Add To Favorite</Button>
            
        </Flex>
        </div>
    );
};

export default Recipe;