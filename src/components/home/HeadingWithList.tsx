import React from 'react';
import {Box, Flex, HStack} from "@chakra-ui/react";
import HeadingWithLeftIcon from "../common/HeadingWithLeftIcon";
import {FaLongArrowAltRight} from 'react-icons/fa';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './swiper.module.css'

import Card from "../common/Card";

import SwiperCore, {
    Navigation
} from 'swiper/core';
import BlueButtonOutlined from "../buttons/blueButtonOutlined";

// install Swiper modules
SwiperCore.use([Navigation]);

const HeadingWithList = () => {

    return (
        <Box>

            <Box mb={'2rem'} display={'grid'} gridRowGap={'2rem'} gridTemplateColumns={['1fr', null, null, '1fr auto']}>

                <HeadingWithLeftIcon>
                    Featured Paths
                </HeadingWithLeftIcon>

                {/* right navigation icons*/}
                <HStack justifyContent={'center'}>

                    <Box border={'1px solid'}
                         borderRadius={'md'}
                         borderColor={'brand.grey'}
                         color={'brand.blue'}
                         as={'button'}
                         p={'.5rem 1rem'}

                    >
                        <FaLongArrowAltLeft
                            size={20}
                        />
                    </Box>

                    <Box
                        border={'1px solid'}
                        borderRadius={'md'}
                        borderColor={'brand.grey'}
                        color={'brand.blue'}
                        as={'button'}
                        p={'.5rem 1rem'}

                    >
                        <FaLongArrowAltRight
                            size={20}
                        />
                    </Box>

                </HStack>

            </Box>

            {/* Carousel*/}
            <Swiper slidesPerView={'auto'}
                    spaceBetween={20}
                    navigation={true}
                    className={styles.swiperContainer}
            >
                <SwiperSlide className={styles.swiperSlide}>
                   <Card/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <Card/>
                </SwiperSlide>
            </Swiper>

            <Flex mt={'2rem'} justifyContent={'center'} alignItems={'center'}>
                <BlueButtonOutlined>
                    See All
                </BlueButtonOutlined>
            </Flex>


        </Box>
    );
};

export default HeadingWithList;