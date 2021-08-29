import React from 'react';
import {Avatar, Box, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, Text} from "@chakra-ui/react";
import BlueButtonFilled from "../buttons/blueButtonFilled";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth: string;
};

const ProfilePage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };

    return (
      <>
          {/* Main Data*/}
          <Box bg={'#fff'} py={'2rem'} px={['1rem', null, '2rem', '3rem', '4rem']}>
              <form onSubmit={handleSubmit(onSubmit)}>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['firstName']}>
                      <FormLabel htmlFor={'firstName'}>
                          First Name
                      </FormLabel>
                      <InputGroup>

                          <Input type={'text'} {...register('firstName', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your first name',
                                  },
                              }
                          )}
                                 placeholder={'First Name'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['firstName']?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['lastName']}>
                      <FormLabel htmlFor={'lastName'}>
                          Last Name
                      </FormLabel>
                      <InputGroup>

                          <Input type={'text'} {...register('lastName', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your last name',
                                  },
                              }
                          )}
                                 placeholder={'Last Name'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['lastName']?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['dateOfBirth']}>
                      <FormLabel htmlFor={'dateOfBirth'}>
                          Date of Birth
                      </FormLabel>
                      <InputGroup>

                          <Input type={'date'} {...register('dateOfBirth', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your Date of Birth',
                                  },
                              }
                          )}
                                 placeholder={'Date of Birth'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['dateOfBirth']?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['phoneNumber']}>
                      <FormLabel htmlFor={'phoneNumber'}>
                          Phone Number
                      </FormLabel>
                      <InputGroup>

                          <Input type={'tel'} {...register('phoneNumber', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your phone number',
                                  },
                              }
                          )}
                                 placeholder={'Phone Number'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['phoneNumber']?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['email']}>
                      <FormLabel htmlFor={'email'}>
                          Email
                      </FormLabel>
                      <InputGroup>

                          <Input type={'email'} {...register('email', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your email',
                                  },
                                  pattern: {
                                      value: /^\S+@\S+$/i,
                                      message: "Invalid Email",
                                  }
                              }
                          )}
                                 placeholder={'Email'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['email']?.message}</FormErrorMessage>
                  </FormControl>

                  <FormControl style={{marginBottom: '1.5rem'}} isInvalid={!!errors['password']}>
                      <FormLabel htmlFor={'password'}>
                          Password
                      </FormLabel>
                      <InputGroup>

                          <Input type={'password'} {...register('password', {
                                  required: {
                                      value: true,
                                      message: 'You must have to specify your password',
                                  },
                                  minLength: {
                                      value: 6,
                                      message: 'Your password must be of 6 characters',
                                  }
                              }
                          )}
                                 placeholder={'password'}
                          />

                      </InputGroup>
                      <FormErrorMessage>{errors['password']?.message}</FormErrorMessage>
                  </FormControl>


                  <Box>
                      <BlueButtonFilled type={'submit'}>
                          Save Changes
                      </BlueButtonFilled>
                  </Box>


              </form>
          </Box>

          {/* Right side*/}
          <Box bg={'#fff'} order={[-1, null, 0]} my={'2rem'}>

              <Box position={'sticky'} top={'6rem'} display={'grid'} justifyContent={'center'}>

                  <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>

                  <Box display={'flex'} justifyContent={'center'}>
                      <Box
                          mt={'8px'}
                          as={'button'}
                          // textAlign={'center'}
                          borderBottom={'1px solid #25CED1'}
                          color={'brand.blue'} lineHeight={1}
                          display={'inline-block'}
                      >
                          Change Photo
                      </Box>
                  </Box>

                  <Text mt={'8px'} textAlign={'center'} fontSize={'20px'}>
                      M Afzaal Afzal
                  </Text>

                  <Box display={'flex'} justifyContent={'center'}>
                      <Box
                          mt={'8px'}
                          as={'button'}
                          // textAlign={'center'}
                          borderBottom={'1px solid #25CED1'}
                          color={'brand.blue'} lineHeight={1}
                          display={'inline-block'}
                      >
                          Edit Profile
                      </Box>
                  </Box>

              </Box>

          </Box>
      </>
    );
};

export default ProfilePage;