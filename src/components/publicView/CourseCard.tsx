import React from 'react';
import {Box, Heading, HStack, Image, Text} from "@chakra-ui/react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import NewTag from "../common/NewTag";
import PopularTag from "../common/PopularTag";
import {FiHeart} from "react-icons/fi";

const CourseCard = () => {

    const heartClickHandler = () => {
        console.log('heart is clicked')
    }

    return (
        <Box cursor={'pointer'} boxShadow={'0px 12px 24px rgba(0, 0, 0, 0.08)'} display={'grid'}
             gridTemplateColumns={['minmax(0,324px)', null, null, null, '324px 1fr']}>
            {/* Image column*/}
            <Box display={'flex'} justifyContent={'center'}>
                <Image src={'/publicView/1.png'} width={'324px'} height={'240px'} layout={'intrinsic'}/>
            </Box>

            {/* Data column*/}
            <Box p={'1rem'} display={'grid'} gridTemplateRows={'auto 1fr auto'}>
                {/* First row*/}
                <Box>
                    <HStack justifyContent={'space-between'}>
                        <Heading fontSize={'24px'} fontWeight={'bold'}>
                            UX/UI Design
                        </Heading>
                        <FiHeart onClick={heartClickHandler} fill={'red'} style={{cursor: 'pointer'}} color={'red'}
                                 size={20}/>
                    </HStack>
                    <Text mt={'1rem'} color={'brand.textGrey'}>
                        Sed aliquam eget volutpat, orci, libero sed turpis. Nibh est pellentesque tristique
                        in mattis nibh vel mattis ac.
                    </Text>
                </Box>

                <Box/>

                <Box mt={['1rem', null, null, null, 0]} display={'grid'}
                     gridTemplateColumns={['1fr', null, null, null, '1fr auto']} justifyContent={'space-between'}>
                    {/*<Rate allowHalf value={4.7}/> (4.7)*/}
                    <Box display={'flex'} justifyContent={['center', null, null, null, 'flex-start']}
                         alignItems={'center'}>

                        <Rating
                            readonly
                            emptySymbol={<AiOutlineStar color={'rgba(255, 228, 86, 1)'} size={25}/>}
                            fullSymbol={<AiFillStar size={25} color={'rgba(255, 228, 86, 1)'}/>}
                            fractions={10}
                            initialRating={4.7}
                        />
                        <Box fontSize={'1.5rem'}>
                            (4.7)
                        </Box>
                    </Box>

                    <HStack mt={['8px', null, null, null, 0]}
                            justifyContent={['flex-end', null, null, null, 'flex-start']} spacing={4}>
                        <NewTag>
                            New
                        </NewTag>
                        <PopularTag>
                            Popular
                        </PopularTag>
                    </HStack>

                </Box>


            </Box>


        </Box>
    );
};

export default CourseCard;