import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import HeadingWithList from "./HeadingWithList";

const CategoryAndPathsSection = () => {
    return (
        <Container py={'8rem'} maxW={'container.xl'} bg={'#fff'}>

            <HeadingWithList/>

            <Box my={'4rem'}>
                <HeadingWithList/>
            </Box>

            <HeadingWithList/>
        </Container>
    );
};

export default CategoryAndPathsSection;