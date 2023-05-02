import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Flex><div>
            <Heading fontSize='24px' mb='43px'>CONTACT US   23 88 994</Heading>
            <Text fontWeight='light' fontSize='14px'>Ⓒ All Rights Reserved Nippon Resutoran </Text>
        </div>
        <Button ml='auto' bgColor='rgba(255, 105, 40, 1)'>JOIN US!</Button>
        </Flex>
    );
};

export default Footer;