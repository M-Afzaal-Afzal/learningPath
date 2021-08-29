import React from 'react';
import {

    Box,
    Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay,
 IconButton,
useDisclosure,

} from "@chakra-ui/react";

import {FaBars} from "react-icons/fa";
import SideBar from "../components/userProfile/Sidebar";
import ProfilePage from "../components/userProfile/ProfilePage";



const UserProfile = () => {



    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <Box  bgGradient={['#fff',null,null,null,null,'linear(to-r,brand.bgGrey 50%, #fff 50%)']}>
            <Container pos={'relative'} maxW={'container.xl'}
                       display={'grid'}
                       gridTemplateColumns={['1fr', null, '4fr 1fr', null, null, '1fr 3fr 1fr']}
                // py={'2rem'}
            >
                {/* Side bar*/}
                <SideBar/>

               <ProfilePage/>


                {/* Sidebar navigation for mobile */}
                {/*     Mobile nav Drawer   */}

                <Box

                    display={['block', null, null, null, null, 'none']}
                    position={'fixed'}
                    top={'100px'}
                    right={'20px'}
                >
                    <IconButton isRound={true} onClick={onOpen}
                                style={{display: 'flex', marginLeft: 'auto'}}
                                aria-label={'button'}
                    >
                        <FaBars/>
                    </IconButton>

                </Box>

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

export default UserProfile;