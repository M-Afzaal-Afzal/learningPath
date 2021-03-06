import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";

import {FiMoreHorizontal} from "react-icons/fi";
import SideBar from "../components/userProfile/Sidebar";
import ProfilePage from "../components/userProfile/ProfilePage";
import LearningPathsPage from "../components/userProfile/LearningPathsPage";
import CreateLearningPathPage from "../components/userProfile/CreateLearningPathPage";

const UserProfile = () => {

    useEffect(() => {
        setActiveLink(+localStorage.getItem('userProfileActiveLink'))
    },[])

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [isCreatingLearningPath,setIsCreatingLearningPath] = useState<boolean>(false);

    const [activeLink, setActiveLink] = useState<number>(0);

    const learningPathPageToggler = () => {
        setIsCreatingLearningPath((prevState => !prevState))
    }

    const activeLinkToggler = (index) => {
        localStorage.setItem('userProfileActiveLink',JSON.stringify(index));
        setActiveLink(index)
    }

    return (
        <Box bgGradient={['#fff', null, null, null, null, 'linear(to-r,brand.bgGrey 50%, #fff 50%)']}>
            <Container pos={'relative'} maxW={'container.xl'}
                       display={'grid'}
                       gridTemplateColumns={['1fr', null, '4fr 1fr', null, null, '1fr 3fr 1fr']}
                // py={'2rem'}
            >
                {/* Side bar*/}
                <SideBar activeLink={activeLink} activeLinkToggler={activeLinkToggler}/>

                {
                    activeLink === 0 && (
                        <ProfilePage/>
                    )
                }

                {
                    activeLink === 1 && !isCreatingLearningPath && (
                        <LearningPathsPage learningPathPageToggler={learningPathPageToggler}/>
                    )
                }

                {
                    activeLink === 1 && isCreatingLearningPath && (
                        <CreateLearningPathPage learningPathPageToggler={learningPathPageToggler}/>
                    )
                }

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
                        <FiMoreHorizontal/>
                    </IconButton>

                </Box>

                <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay/>
                    <DrawerContent bg={'brand.bgGrey'}
                                   pos={'relative'}
                    >

                        <DrawerCloseButton style={{borderRadius: '50%'}} zIndex={55}/>
                        <DrawerBody p={0}>
                            <SideBar activeLink={activeLink} activeLinkToggler={activeLinkToggler} isMobileNav={true}/>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

            </Container>
        </Box>
    );
};

export default UserProfile;