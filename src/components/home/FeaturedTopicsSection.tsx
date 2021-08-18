import React from 'react';
import {Box, Container, VStack} from "@chakra-ui/react";
import HeadingWithLeftIcon from "../common/HeadingWithLeftIcon";
import BlueButtonOutlined from "../buttons/blueButtonOutlined";
import BlueHeading from "../common/BlueHeading";
import HeadingWithSubHeading from "../common/HeadingWithSubHeading";

const FeaturedTopicsSection = () => {
    return (
        <Box bg={'brand.bgGrey'} py={['2rem', '4rem', '6rem', null, '8rem']}>
            <Container maxW={'container.xl'}>
                <Box display={'grid'} gridRowGap={'2rem'} placeItems={['center',null,null,'start']} gridTemplateColumns={['1fr', null, null, '1fr auto']}>
                    <HeadingWithLeftIcon>
                        Featured topics by category
                    </HeadingWithLeftIcon>

                    <Box>
                        <BlueButtonOutlined bg={'brand.bgGrey'}>
                            See All
                        </BlueButtonOutlined>
                    </Box>

                </Box>

                <Box mt={'4rem'} gridRowGap={'2rem'} gridColumnGap={'1rem'} display={'grid'} gridTemplateColumns={['1fr',null,'1fr 1fr',null,'1fr 1fr 1fr 1fr']}>

                    <Box>

                        <BlueHeading>
                            Development
                        </BlueHeading>

                        <VStack mt={'1rem'} alignItems={'flex-start'} spacing={2}>

                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>

                        </VStack>

                    </Box>

                    <Box>
                        <BlueHeading>
                            Science
                        </BlueHeading>

                        <VStack mt={'1rem'} alignItems={'flex-start'} spacing={2}>

                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>

                        </VStack>

                    </Box>

                    <Box>
                        <BlueHeading>
                            Business
                        </BlueHeading>

                        <VStack mt={'1rem'} alignItems={'flex-start'} spacing={2}>

                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>
                            <HeadingWithSubHeading/>

                        </VStack>

                    </Box>

                    <Box>
                        <BlueHeading>
                            IT & Software
                        </BlueHeading>

                        <VStack mt={'1rem'} alignItems={'flex-start'} spacing={2}>

                        <HeadingWithSubHeading/>
                        <HeadingWithSubHeading/>
                        <HeadingWithSubHeading/>
                        <HeadingWithSubHeading/>

                        </VStack>


                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default FeaturedTopicsSection;