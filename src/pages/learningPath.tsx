import React from 'react';
import {Avatar, Box, Container, Heading, HStack, IconButton, Text, useDisclosure, VStack} from "@chakra-ui/react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import classes from '../styles/rating.module.css';
import Image from 'next/image';
import {FiHeart} from "react-icons/fi";
import BlueButtonOutlined from "../components/buttons/blueButtonOutlined";
import UserProfileCard from "../components/common/UserProfileCard";
import ListItem from "../components/common/ListItem";
import LearningResourceCard from "../components/userProfile/LearningResourceCard";


const LearningPath = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const userProfileToggler = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    }

    return (
        <Box>
            <Container pos={'relative'} maxW={'container.xl'}
                       display={'grid'}
                       gridTemplateColumns={['1fr', null, null, null, '250px 4fr']}
                // py={'2rem'}
            >

                {/* Mobile Navigation icon*/}
                <Box
                    display={['inline-block', null, null, null, 'none']}
                    pos={'fixed'}
                    top={'100px'}
                    right={'20px'}
                    borderRadius={'50%'}
                    cursor={'pointer'}
                    transition={'all .3s linear'}
                    zIndex={55}
                >
                    <IconButton isRound={true} onClick={userProfileToggler}
                                style={{display: 'flex', marginLeft: 'auto'}}
                                aria-label={'button'}
                    >
                        <Avatar size={'sm'} onClick={onOpen} src={'https://bit.ly/dan-abramov'}/>
                    </IconButton>

                </Box>

                {/* Mobile Nav Box*/}

                <Box
                    pos={'fixed'}
                    top={'150px'}
                    right={'20px'}
                    zIndex={55}
                >
                    <UserProfileCard visibility={isOpen ? 'visible' : 'hidden'}
                                     opacity={isOpen ? 1 : 0}
                                     transition={'all .3s linear'}
                                     transform={isOpen ? 'scale(1)' : 'scale(0)'}
                                     background={'#fff'}
                                     pos={'relative'}
                    />
                </Box>

                {/* Sidebar*/}
                <Box display={['none', null, null, null, 'block']}>

                    <Box m={'1.5rem'} mt={'2rem'}>

                        <Box borderRadius={'4px'} overflow={'hidden'} w={'100%'} height={'240px'} pos={'relative'}>
                            <Image src={'/publicView/1.png'} layout={'fill'} objectFit={'fill'}/>
                        </Box>

                        <Box mt={'1.5rem'}>
                            <UserProfileCard/>
                        </Box>

                    </Box>

                </Box>

                {/* Main Body*/}

                <Box p={'1.5rem'} pt={'2rem'} px={'2rem'}>

                    <Box display={'grid'} gridTemplateColumns={['1fr', null, null, null, 'auto auto']}
                         justifyContent={'space-between'} alignItems={'center'}
                    >

                        <HStack alignItems={'center'}>
                            <Heading fontSize={'40px'} fontWeight={'bold'}>
                                UI/UX Design
                            </Heading>
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
                        </HStack>

                        <Box display={'flex'} justifyContent={'flex-end'} py={['1rem', null, null, null, '0']}>
                            <BlueButtonOutlined display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                Add to favourite <FiHeart color={'#25CED1'} style={{marginLeft: '1rem'}} size={'20'}/>
                            </BlueButtonOutlined>
                        </Box>
                    </Box>

                    <Text py={'1.5rem'} fontSize={'20px'}>
                        Become a Designer in 2021! Master Mobile and Web Design, User Interface + User Experience (UI/UX
                        Design),
                    </Text>

                    <VStack alignItems={'flex-start'}>
                        <ListItem>
                            Build beautifully designed web and mobile projects for your customers using modern tools
                            used by top companies in 2021
                        </ListItem>
                        <ListItem>
                            Learn to design for all types of devices using Figma and other tools used by some of the top
                            designers in the world
                        </ListItem>

                        <ListItem>
                            ncludes 100+ assets and premium design templates that you can keep and use to customize for
                            all your future projects
                        </ListItem>

                        <ListItem>
                            Have an amazing design portfolio customized and professionally completed by the end of the
                            course (we provide it for you!)
                        </ListItem>

                    </VStack>

                    {/* Bottom Learning Resources section*/}
                    <Box>
                        <Box mt={'4rem'} mb={'1rem'}
                             justifyContent={'space-between'}
                             alignItems={'center'}
                        >
                            <Heading fontSize={'36px'} fontWeight={'bold'}>
                                Learning Resources
                            </Heading>
                        </Box>

                        <Box flexWrap={'wrap'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                            <Box p={'1rem'} w={['100%', null, '360px']}>
                                <LearningResourceCard/>
                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default LearningPath;