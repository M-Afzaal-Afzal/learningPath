import React, {useState} from 'react';
import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, IconButton} from "@chakra-ui/react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FiMinus, FiPlus} from "react-icons/fi";

const AccordionItemRating = () => {

    // rating
    const [rating, setRating] = useState(4.5);

    const ratingHandler = (rating) => {
        setRating(rating);
    }

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Rating
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
                <Box display={'flex'} justifyContent={'center'}>
                    <Rating
                        emptySymbol={<AiOutlineStar color={'rgba(255, 228, 86, 1)'} size={25}/>}
                        fullSymbol={<AiFillStar size={25} color={'rgba(255, 228, 86, 1)'}/>}
                        fractions={10}
                        initialRating={rating}
                        onChange={ratingHandler}
                    />
                </Box>
                <HStack mt={'.5rem'} justifyContent={'space-between'}>

                    <Box fontSize={'1.5rem'}>
                        {rating}
                    </Box>

                    <Box>
                        <Box>
                            <IconButton onClick={() => {
                                ratingHandler(rating > 0 ? Number(+rating - 0.1).toFixed(1) : rating)
                            } } borderRadius={0} colorScheme={'blue'} size={'sm'} aria-label={'plus'}>
                                <FiMinus/>
                            </IconButton>
                            <IconButton onClick={() => {
                                ratingHandler(rating < 5 ? Number(+rating + 0.1).toFixed(1) : rating)
                            } } borderRadius={0} colorScheme={'blue'} size={'sm'} aria-label={'plus'}>
                                <FiPlus/>
                            </IconButton>
                        </Box>
                    </Box>

                </HStack>
            </AccordionPanel>
        </AccordionItem>
)
    ;
};

export default AccordionItemRating;