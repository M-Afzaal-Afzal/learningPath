import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    VStack,
    Input,
    Text,
    InputGroup,
    Drawer,
    InputLeftElement,
    IconButton,
    useDisclosure,
    DrawerFooter,
    DrawerBody,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerHeader, DrawerContent
} from "@chakra-ui/react";
import {FaAngleDown, FaBars} from 'react-icons/fa';
import Image from 'next/image'
import BlueButtonFilled from "../buttons/blueButtonFilled";
import BlueButtonOutlined from "../buttons/blueButtonOutlined";

const Header = () => {

    //drawer handler
    const {isOpen, onOpen, onClose} = useDisclosure()

    const [isCategoriesShow, setIsCategoriesShown] = useState<Boolean>(false);

    const categories = ['1st category', '2nd Category', '3rd Category', '4th Category'];

    const toggleShowCategories = () => {
        setIsCategoriesShown((prevState) => !prevState);
    }

    const categoryClickHandler = (category: String) => {
        console.log(category);
        setIsCategoriesShown(false);
    }


    return (

        <Box zIndex={999} pos={'sticky'} top={0} left={0} w={'100%'} bg={'#fff'}>
            <Container maxW={'container.xl'}>
                <Box height={'80px'} display={'flex'}
                     justifyContent={'space-between'}
                     alignItems={'center'}
                >

                    {/* left section of header*/}
                    <HStack spacing={8}>
                        <Heading as={'button'} cursor={'pointer'} fontSize={['30px', '32px', '36px']}>
                            Brain<Box display={'inline-block'} color={'brand.blue'}>Drip</Box>
                        </Heading>

                        <HStack display={['none', null, null, null, null, 'flex']} pos={'relative'} spacing={2}>

                            <Text fontWeight={'bold'} fontSize={'20px'}>
                                Categories
                            </Text>

                            <FaAngleDown onClick={toggleShowCategories} size={20}/>

                            <VStack
                                opacity={isCategoriesShow ? 1 : 0}
                                zIndex={isCategoriesShow ? 20 : -5}
                                visibility={isCategoriesShow ? 'visible' : "hidden"}
                                // transform={isCategoriesShow ? 'scale(1)' : 'scale(0)'}
                                transition={'all .3s linear'}
                                top={'3rem'}
                                left={'30%'}
                                pos={'absolute'}
                                width={'15rem'}
                                padding={'1rem'}
                                bg={'brand.bgGrey'}
                                boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}
                                borderRadius={'lg'}
                            >
                                {
                                    categories.map((category, index) => (
                                        <Button onClick={categoryClickHandler.bind(this, category)} key={index}
                                                isFullWidth={true}>
                                            {category}
                                        </Button>
                                    ))
                                }

                            </VStack>


                        </HStack>
                    </HStack>

                    {/* central section of header*/}
                    <HStack display={['none', null, null, 'flex']} alignItems={'center'}
                            justifyContent={'center'}>
                        <InputGroup minW={['auto', null, '20rem', null, '25rem']}>
                            <InputLeftElement
                                pointerEvents="none"
                                children={
                                    <Image
                                        width={19}
                                        height={19}
                                        layout={'intrinsic'}
                                        src={'/icons/searchIcon.svg'}
                                    />
                                }
                            />
                            <Input type="text" placeholder="Search what you want to learn"/>
                        </InputGroup>
                    </HStack>

                    {/* Right section of header*/}
                    <HStack spacing={6} justifyContent={'flex-end'}>
                        <Box display={['none', null, null, null, null, 'flex']}>
                            <BlueButtonOutlined>
                                Log In
                            </BlueButtonOutlined>
                        </Box>
                        <Box display={['none', null, null, null, null, 'flex']}>
                            <BlueButtonFilled>
                                Sign Up
                            </BlueButtonFilled>
                        </Box>

                        <Box display={['block', null, null, null, null, 'none']}>
                            <IconButton
                                onClick={onOpen}
                                isRound={true}
                                // _hover={{background: "transparent"}}
                                bg={'transparent'} aria-label={''}
                                // _active={{background: "transparent"}}
                            >
                                <FaBars color={'#25CED1'} size={20}/>
                            </IconButton>
                        </Box>

                    </HStack>

                </Box>

            </Container>

            {/*     Side Drawer*/}
            <Drawer
                isOpen={isOpen}
                placement="right"

                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton borderRadius={'50%'}/>
                    <DrawerHeader borderBottomWidth="1px">
                        <Heading fontSize={'28px'}>
                            Brain<Box display={'inline-block'} color={'brand.blue'}>Drip</Box>
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody>

                        <VStack my={'1rem'}>
                            <BlueButtonFilled w={'100%'}>
                                Sign Up
                            </BlueButtonFilled>
                            <BlueButtonOutlined w={'100%'}>
                                Log In
                            </BlueButtonOutlined>
                        </VStack>

                        <Heading mt={'1.5rem'} fontSize={'1.5rem'}>
                            Search
                        </Heading>

                        <Box mt={'1rem'}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                        <Image
                                            width={19}
                                            height={19}
                                            layout={'intrinsic'}
                                            src={'/icons/searchIcon.svg'}
                                        />
                                    }
                                />
                                <Input type="text" placeholder="What you want to learn"/>
                            </InputGroup>
                        </Box>

                        <Heading mt={'1.5rem'} fontSize={'1.5rem'}>
                            Categories
                        </Heading>

                        <VStack my={'1rem'}>
                            {
                                categories.map((category, index) => (
                                    <BlueButtonOutlined key={index} w={'100%'}>
                                        {category}
                                    </BlueButtonOutlined>
                                ))
                            }

                        </VStack>


                    </DrawerBody>

                    <DrawerFooter textAlign={'center'} justifyContent={'center'} borderTopWidth="1px">
                        all rights are reserved
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </Box>


    );
};

export default Header;
