import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";

const Card = () => {
    return (
        <Box maxW={'360px'}
             borderRadius={'4px'}
             overflow={'hidden'}
             boxShadow={'0px 12px 24px 0px rgba(0, 0, 0, 0.08)'}
             cursor={'pointer'}
             transition={'all .3s linear'}
             style={{
                 backfaceVisibility: 'hidden',
             }}
        >

            <Box pos={'relative'} maxW={'100%'} h={'200px'}>
                <Image src={'/home/1.png'} layout={'fill'} objectFit={'cover'}/>
            </Box>

            <Box p={'1.2rem 1.4rem'}>

                <Heading fontSize={'24px'}>
                    Node.Js Programming
                </Heading>
                <Text mt={'8px'} fontSize={'16px'}>
                    Sed aliquam eget volutpat, orci, libero sed turpis. Nibh est pellentesque tristique in
                    mattis nibh vel mattis ac.
                </Text>

            </Box>

        </Box>
    );
};

export default Card;