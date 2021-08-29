import React from 'react';
import {Avatar, Box, Container, useDisclosure} from "@chakra-ui/react";

import CourseCard from "../components/publicView/CourseCard";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"
import SideBar from "../components/publicView/SideBar";

const PublicView = () => {

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
                        border={'2px solid grey'}
                        cursor={'pointer'}
                        transition={'all .3s linear'}
                        _hover={{
                            border:'2px solid #eee',
                        }}
                    >
                        <Avatar size={'sm'} onClick={onOpen} src={'https://bit.ly/dan-abramov'}/>
                    </Box>

                    {/* Side bar*/}
                    <SideBar/>

                    {/* Main contact*/}
                    <Box py={'2rem'}
                         justifyContent={'center'}
                         px={['1rem', null, '2rem', '3rem', '4rem']}
                         display={'grid'}
                         gridGap={'2rem'}
                         gridTemplateColumns={['minmax(0,324px)', null, null, 'minmax(0,324px) minmax(0,324px)', '1fr']}
                         background={'#fff'}
                    >
                        {/* Card for public view*/}
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>

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

export default PublicView;