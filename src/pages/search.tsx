import React from 'react';
import { Box, Container, IconButton, Text, useDisclosure} from "@chakra-ui/react";

import CourseCard from "../components/publicView/CourseCard";
import {
    Drawer,
    DrawerBody,

    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"
import SideBar from "../components/Search/SideBar";
import {FiSearch} from 'react-icons/fi';

const Search = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Box bgGradient={['#fff', null, null, null, null, 'linear(to-r,brand.bgGrey 50%, #fff 50%)']}>

            <Container maxW={'container.xl'}>

                <Box pos={'relative'}
                     display={'grid'}
                     gridTemplateColumns={['1fr', null, null, null, null, '1fr 3fr']}
                    // py={'2rem'}
                >

                    {/* Mobile Nav*/}

                    <Box
                        display={['inline-block', null, null, null, null, 'none']}
                        pos={'fixed'}
                        top={'100px'}
                        right={'20px'}
                        borderRadius={'50%'}
                        cursor={'pointer'}
                        transition={'all .3s linear'}

                    >
                        <IconButton color={'brand.blue'} onClick={onOpen} isRound={true} aria-label={'search'}>
                            <FiSearch size={25} />
                        </IconButton>
                    </Box>

                    {/* Side bar*/}
                    <SideBar/>

                    {/* Main contact*/}
                    <Box py={'2rem'}
                         px={['1rem', null, '2rem', '3rem', '4rem']}
                         background={'#fff'}
                    >

                        <Text fontSize={'18px'} pb={'1.5rem'}>
                            We found 123 results for <span style={{fontWeight: 'bold'}}>"UX/UI Design"</span>
                        </Text>

                        <Box
                            justifyContent={'center'}
                            display={'grid'}
                            gridGap={'2rem'}
                            gridTemplateColumns={['minmax(0,324px)', null, null, 'minmax(0,324px) minmax(0,324px)', '1fr']}

                        >
                            {/* Card for public view*/}
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>

                        </Box>
                    </Box>
                </Box>

                {/*     Mobile nav Drawer   */}

                <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay/>
                    <DrawerContent bg={'brand.bgGrey'}
                                   pos={'relative'}
                    >

                        <DrawerCloseButton style={{borderRadius: '50%'}} zIndex={55}/>
                        <DrawerBody p={0}>
                            <SideBar isMobileNav={true}/>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>


            </Container>
        </Box>
    );
};

export default Search;