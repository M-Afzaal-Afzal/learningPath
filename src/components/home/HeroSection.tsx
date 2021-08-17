import React from 'react';
import {Box, Container, Heading, Text} from "@chakra-ui/react";
import Image from 'next/image';
import OrangeButtonFilled from "../buttons/orangeButtonFilled";

const HeroSection = () => {
    return (
        <Box minH={'100vh'} bg={'brand.bgGrey'}>
            <Container maxW={'container.xl'}>

                <Box pt={'2rem'} placeItems={'center'} display={'grid'} gridTemplateColumns={['1fr',null,null,null,'1fr 1fr']}>
                    {/*Left grid item*/}
                    <Box>
                        <Heading fontSize={['50px',null,'60px',null,'72px']}>
                            Library of <br/> learning paths
                        </Heading>

                        <Text mt={'1rem'} fontSize={['1rem',null,'20px',null,'24px']}>
                            Educational non for profit platform<br/>
                            that aims to crowdsource curriculum
                        </Text>

                        <Box mt={'2rem'}>
                            <OrangeButtonFilled py={'8px'}>
                                Get Started for Free
                            </OrangeButtonFilled>
                        </Box>
                    </Box>

                    {/* right grid item*/}
                    <Box position={'relative'} display={'grid'} gridTemplateColumns={'1fr'}>
                        <Box gridColumn={'1/-1'} zIndex={55}>
                             <Image priority src={'/home/girl.png'} layout={'intrinsic'}
                                   width={454}
                                   height={622}
                            />
                        </Box>

                        <Box gridColumn={'1/-1'} zIndex={5} pos={'absolute'} left={0} bottom={0}>
                            <Image  priority src={'/home/bars.png'}
                                   layout={'intrinsic'}
                                   width={670}
                                   height={648}
                            />
                        </Box>


                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default HeroSection;