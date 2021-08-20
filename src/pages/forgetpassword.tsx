import React from 'react';
import {
    Box,
    Container, FormControl, FormErrorMessage,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    Text
} from "@chakra-ui/react";
// import Link from 'next/link';
// import Image from 'next/image';
// import IconButton from "../components/buttons/iconButton";
import {FiMail} from 'react-icons/fi';
import OrangeButtonFilled from "../components/buttons/orangeButtonFilled";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    password: string,
    email: string,
};

const ForgetPassword = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };


    return (
        <Box bg={'#E5E5E5'} py={'4rem'}>

            <Container
                px={'2rem'}
                background={'#fff'}
                py={'4rem'}
                maxW={'35rem'}
            >
                <Box display={'flex'} justifyContent={'center'}>
                    <Heading fontSize={'50px'}>
                        Forgot Password
                    </Heading>
                </Box>

                <Box mt={'1.5rem'}>
                    <Text fontSize={'24px'} textAlign={'center'} color={'brand.textGrey'}>
                        Enter your email address that you used
                        to register. We`ll send you an email
                        with a link to reset your password
                    </Text>
                </Box>

                {/* Handling the form there*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mt={'1.3rem'} isInvalid={!!errors.email}>
                        {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                fontSize="1.2em"
                                children={<FiMail color={'#25CED1'}/>}
                            />
                            <Input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'You must have to specify your email',
                                    },
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid Email',
                                    }
                                }
                            )}
                                   placeholder="Email"
                            />
                            {/*<InputRightElement children={<CheckIcon color="green.500" />} />*/}
                        </InputGroup>
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>

                    <HStack mt={'1.5rem'} justifyContent={'center'}>
                        <OrangeButtonFilled>
                            Confirm
                        </OrangeButtonFilled>
                    </HStack>

                </form>


            </Container>
        </Box>
    );
};

export default ForgetPassword;