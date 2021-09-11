import React from 'react';
import {Avatar, Box, BoxProps, Heading, HStack, Text} from "@chakra-ui/react";

import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import classes from "../../styles/rating.module.css";
import OrangeButtonFilled from "../buttons/orangeButtonFilled";

const UserProfileCard: React.FC<BoxProps> = (props) => {

    return (
        <Box p={'2rem 1.5rem'} boxShadow={'0px 12px 24px 0px rgba(0, 0, 0, 0.08)'} {...props}>

            <HStack justifyContent={'center'}>
                <Avatar size={'xl'} name={'Afzaal'} src={'https://bit.ly/dan-abramov'}/>
            </HStack>

            <Heading mt={'1.5rem'} textAlign={'center'} fontWeight={700} fontSize={'20px'}>
                Anthony Jashkiv
            </Heading>

            <Text textAlign={'center'} fontSize={'14px'}>
                UX/UI Designer
            </Text>

            <Box p={'.5rem'} display={'flex'} alignItems={'center'}>
                {/*<Rate allowHalf value={4.7}/> (4.7)*/}
                <Rating
                    readonly
                    emptySymbol={<AiOutlineStar color={'rgba(255, 228, 86, 1)'} size={18}/>}
                    fullSymbol={<AiFillStar size={18} color={'rgba(255, 228, 86, 1)'}/>}
                    fractions={10}
                    initialRating={4.7}
                    className={classes.rating}
                />
                <Box fontSize={'1.1rem'}>
                    (4.7)
                </Box>
            </Box>

            <Box mt={'1.5rem'} display={'flex'} justifyContent={'center'}>
                <OrangeButtonFilled fontSize={'16px'}>
                    Contact Me
                </OrangeButtonFilled>
            </Box>

        </Box>

    );
};

export default UserProfileCard;