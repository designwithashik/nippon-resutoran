import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const ChefRecipes = () => {
    const chef = useLoaderData()
    const { name, likes, bio, recipes, image, number_of_recipes, years_of_experience, id } = chef
    return (
        <div>
            <Flex   borderBottomRightRadius={{md:'35%'}} gap='30px' flexDir={{ base:'column', md: 'row'}} px={{base:'20px', md: '100px', lg: '165px'}} mb='120px' py='41px' justifyContent={{base:'center',md:'space-evenly'}}  bgColor='rgba(217, 217, 217, 1)'>
                <Flex w='full' flexDir='column' gap='10px' justifyContent='center'>
                    <Heading >OUR ONE OF</Heading><Heading>THE BEST CHEF</Heading><Heading color='rgba(255, 105, 40, 1)'> {name}</Heading>
                    <Text fontWeight='bold'>{bio}</Text>
                </Flex>
                <Flex alignItems='center' justifyContent='center' flexDir='column' w='full'>
                    <Image w='55%' borderRadius='full' src={image}></Image>
                    <Flex textAlign='center' flexDir={{ base:'column', md: 'row'}} fontWeight='bold' mt='30px' gap='30px' justifyContent='space-evenly'>
                        <Text p='12px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>Experience{<br />} {years_of_experience} Years</Text>
                        <Text p='12px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>Likes{<br />} {likes}</Text>
                        <Text p='12px' color='white' borderRadius='3xl' bgColor='rgba(255, 105, 40, 1)'>Recipes{<br />} {number_of_recipes}</Text>
                    </Flex>

                </Flex>
            </Flex>
            <Heading textAlign='center'>MOST POPULAR RECIPES BY <Text fontSize='36px' fontWeight='bold' color='rgba(255, 105, 40, 1)'> {name}</Text></Heading>
            <Flex mb='120px' flexWrap='wrap' justifyContent='space-evenly'>
                {recipes.map(recipe =><Recipe key={recipe.id} recipe={recipe}></Recipe>)}
            </Flex>


        </div>
    );
};

export default ChefRecipes;