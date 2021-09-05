import React, {useState} from 'react';
import {
    Box, Checkbox,
    Container, FormControl, FormErrorMessage,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import Link from 'next/link';
// import Image from 'next/image';
import IconButton from "../../components/buttons/iconButton";
import {FiMail, FiLock, FiEye, FiEyeOff} from 'react-icons/fi';
import OrangeButtonFilled from "../../components/buttons/orangeButtonFilled";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    password: string,
    email: string,
};

const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };


    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const passwordVisibleHandler = () => {
        setIsPasswordVisible((prevState => !prevState));
    }

    const rememberMeHandler = () => {
        setRememberMe((prevState => !prevState));
    }

    return (
        <Box bg={'#E5E5E5'}>

            <Container
                px={'2rem'}
                background={'#fff'}
                py={'4rem'}
                maxW={'35rem'}
            >
                <Box display={'flex'} justifyContent={'center'}>
                    <Heading fontSize={'50px'}>
                        Login
                    </Heading>
                </Box>

                <Box mt={'2rem'}
                     display={'grid'}
                     gridTemplateColumns={'1fr 1fr'}
                     gridColumnGap={'1rem'}
                >

                    <IconButton iconPath={'/icons/facebookColored.svg'}>
                        Facebook
                    </IconButton>

                    <IconButton iconPath={'/icons/googleColored.svg'}>
                        Google
                    </IconButton>

                </Box>

                <HStack py={'1rem'} justifyContent={'center'}>
                    <Text fontSize={'20px'} fontWeight={500}>
                        or
                    </Text>
                </HStack>

                {/* Handling the form there*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={!!errors.email}>
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


                    <Box mt={'1.5rem'}>

                        <FormControl isInvalid={!!errors.password}>
                            {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    color="gray.300"
                                    fontSize="1.2em"
                                    children={<FiLock color={'#25CED1'}/>}
                                />
                                <Input
                                    {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your password',
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Password must be of 6 digits",
                                            }
                                        }
                                    )}
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder="Password"
                                />

                                <InputRightElement
                                    onClick={passwordVisibleHandler}
                                    children={
                                    !isPasswordVisible ? (
                                        <Box as={'button'} type={'button'}>
                                            <FiEyeOff color="#25CED1"/>
                                        </Box>
                                    ) : (
                                        <Box as={'button'} type={'button'}>
                                            <FiEye color="#25CED1"/>
                                        </Box>
                                    )
                                }/>
                            </InputGroup>
                            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                        </FormControl>


                    </Box>

                    <HStack justifyContent={'flex-end'}>
                        <Link href={'/forgetpassword'}>
                            <Text borderBottom={'1px solid #25CED1'}
                                  as={'button'}
                                  type={'button'}
                                  color={'brand.blue'}
                                  mt={'8px'}
                                  lineHeight={1}
                            >
                                Forget Password
                            </Text>
                        </Link>
                    </HStack>

                    <HStack justifyContent={'space-between'} mt={'2rem'}>
                        <Box>
                            <Checkbox onChange={rememberMeHandler} checked={rememberMe}>Remember Me</Checkbox>
                        </Box>

                        <Box>
                            <OrangeButtonFilled type={'submit'}>
                                Log In
                            </OrangeButtonFilled>
                        </Box>

                    </HStack>

                </form>

                <HStack mt={'3rem'} justifyContent={'center'}>
                    <Text>
                        Don't have an account? {' '}
                        <Link href={'/signup'}>
                            <Box
                                borderBottom={'1px solid #25CED1'}
                                as={'button'}
                                type={'button'}
                                color={'#25CED1'}
                                display={'inline-block'}
                                lineHeight={1}
                            >
                                Create account
                            </Box>
                        </Link>
                    </Text>
                </HStack>

            </Container>
        </Box>
    );
};

export default Login;