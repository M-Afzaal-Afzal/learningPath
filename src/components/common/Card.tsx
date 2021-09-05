import React from 'react';
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import Image from "next/image";
import {FiHeart} from 'react-icons/fi';
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";


const Card = () => {

    const heartClickHandler = ()=> {
        console.log('Heart is clicked')
    }

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

                <HStack
                    pos={'absolute'}
                    top={0}
                    left={0}
                    justifyContent={'space-between'}
                    w={'100%'}
                    alignItems={'flex-start'}
                >
                    {/* rating*/}
                    <Box p={'.5rem'} display={'flex'} alignItems={'center'}>
                        {/*<Rate allowHalf value={4.7}/> (4.7)*/}
                        <Rating
                            readonly
                            emptySymbol={<AiOutlineStar color={'rgba(255, 228, 86, 1)'} size={25}/>}
                            fullSymbol={<AiFillStar size={25} color={'rgba(255, 228, 86, 1)'}/>}
                            fractions={10}
                            initialRating={4.7}
                        />
                        <Box color={'#fff'} fontSize={'1.5rem'}>
                            (4.7)
                        </Box>
                    </Box>

                    {/* Heart Icon*/}
                    <Box>
                        <Box onClick={heartClickHandler} borderRadius={'0 4px 0 4px'} p={'.5rem'} bg={'brand.blue'}>
                            <FiHeart color={'#fff'} size={25}/>
                        </Box>
                    </Box>

                </HStack>

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