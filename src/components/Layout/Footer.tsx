import React from 'react';
import {Box, Container, Heading, HStack, IconButton} from "@chakra-ui/react";
import TextButton from "../buttons/textButton";

const Footer = () => {
    return (
        <Box background={'brand.textDark'} py={'4rem'}>
            <Container maxW={'container.xl'}>

                <Box
                    display={'grid'}
                    placeItems={['center',null,null]}
                    gridTemplateColumns={['1fr',null,null,'auto 1fr auto']}
                    gridRowGap={'1.3rem'}
                >

                    <HStack spacing={8}>

                        <Box>
                            <Heading color={'#fff'} as={'button'} cursor={'pointer'} fontSize={['30px', '32px', '36px']}>
                                Brain<Box display={'inline-block'} color={'brand.blue'}>Drip</Box>
                            </Heading>
                        </Box>

                        <HStack>

                            <IconButton size={'sm'} variant={'unstyled'} aria-label={'facebook'}>
                                <img src={'/icons/facebook.svg'} style={{width: '2rem',height: 'auto'}} alt="facebook"/>
                            </IconButton>

                            <IconButton size={'sm'} variant={'unstyled'} aria-label={'facebook'}>
                                <img src={'/icons/twitter.svg'} style={{width: '2rem',height: 'auto'}} alt="facebook"/>
                            </IconButton>

                            <IconButton size={'sm'} variant={'unstyled'} aria-label={'facebook'}>
                                <img src={'/icons/instagram.svg'} style={{width: '2rem',height: 'auto'}} alt="facebook"/>
                            </IconButton>
                        </HStack>

                    </HStack>

                    <Box display={['none',null,null,'block']} />

                    <HStack spacing={12}>

                        <TextButton cursor={'pointer'} color={'#fff'}>
                            Help
                        </TextButton>

                        <TextButton cursor={'pointer'} color={'#fff'}>
                            Privacy
                        </TextButton>

                        <TextButton cursor={'pointer'} color={'#fff'}>
                            Terms
                        </TextButton>

                    </HStack>

                </Box>

                <Box mt={'2rem'} color={'rgba(198, 198, 198, 1)'} textAlign={'center'} pt={'1rem'} borderTop={'1px solid rgba(198, 198, 198, 1)'}>
                    All rights reserved, 2021
                </Box>

            </Container>
        </Box>
    );
};

export default Footer;