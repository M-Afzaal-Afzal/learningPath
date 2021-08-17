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
    InputLeftElement
} from "@chakra-ui/react";
import {FaAngleDown} from 'react-icons/fa';
import Image from 'next/image'
import BlueButtonFilled from "../buttons/blueButtonFilled";
import BlueButtonOutlined from "../buttons/blueButtonOutlined";

const Header = () => {

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
        <Box bg={'#fff'}>
            <Container maxW={'container.xl'}>
                <Box height={'80px'} display={'flex'}
                     justifyContent={'space-between'}
                     alignItems={'center'}
                >
                    <HStack spacing={8}>
                        <Heading fontSize={'36px'}>
                            Learning<Box display={'inline-block'} color={'brand.blue'}>Path</Box>
                        </Heading>

                        <HStack pos={'relative'} spacing={2}>

                            <Text fontWeight={'bold'} fontSize={'20px'}>
                                Categories
                            </Text>

                            <FaAngleDown onClick={toggleShowCategories} size={20}/>

                            {
                                isCategoriesShow && (
                                    <VStack top={'3rem'}
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
                                )
                            }

                        </HStack>
                    </HStack>
                    <HStack alignItems={'center'} justifyContent={'center'}>
                        <InputGroup  minW={'25rem'}>
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
                    <HStack spacing={6} justifyContent={'flex-end'}>
                        <BlueButtonOutlined>
                            Log In
                        </BlueButtonOutlined>
                        <BlueButtonFilled>
                            Sign Up
                        </BlueButtonFilled>
                    </HStack>

                </Box>

            </Container>
        </Box>
    );
};

export default Header;