import React from 'react';
import { Box, Button, Card, Flex, Heading, Image, List, ListItem, OrderedList, Text } from '@chakra-ui/react';
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
              <Flex height='95%' border='1px solid rgba(255, 105, 42, 1)' bgColor='rgba(217, 217, 217, 1)' textAlign='center' w='260px' p='23px' flexDir='column' borderRadius='lg' my='30px'>
            <Heading p='20px' borderRadius='lg' bgColor='rgba(255, 105, 40, 1)' fontSize='20px' mb='20px'>{name}</Heading>
            <Box p='12px' fontWeight='bold'><Text fontWeight='bold' color='rgba(255, 105, 40, 1)' fontSize='20px'>Ingredients</Text>
                    <OrderedList textAlign='left'>{ingredients.map((ingredient, index) => <ListItem key={index}>{ingredient}</ListItem>)}</OrderedList>
            </Box>
            <Box mb='auto' px='12px' borderRadius='3xl' ><Text color='rgba(255, 105, 40, 1)' fontSize='20px' fontWeight='bold'>Cooking Method</Text>
                <Text fontSize='sm'>{cooking_method}</Text>
            </Box>
            <Box mb='10px'><Rating itemStyles={customStyles} style={{ maxWidth: 250 }} value={rating} readOnly /></Box>
            
           <Button p='25px' color='black' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>Add To Favorite</Button>
            
        </Flex>
        </div>
    );
};

export default Recipe;