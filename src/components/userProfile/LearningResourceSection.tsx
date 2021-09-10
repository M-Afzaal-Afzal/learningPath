import React, {useMemo} from 'react';
import {Box, FormControl, FormErrorMessage, Heading, Input, InputGroup, useDisclosure, VStack} from "@chakra-ui/react";
import LearningResourceCard from "./LearningResourceCard";
import BlueButtonFilled from "../buttons/blueButtonFilled";
import {FiPlus} from "react-icons/fi";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import {useForm} from "react-hook-form";
import {useDropzone} from "react-dropzone";

type Inputs = {
    name: string,
    url: string;
};

const LearningResourceSection = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        maxFiles: 1,
        accept: 'image/jpeg, image/png, image/svg, image/jpg',
    });

    const activeStyle = {
        borderColor: '#25CED1'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#EA5252'
    };

    const dropzoneStyle = useMemo(() => ({

        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <Box>

            <Box mt={'4rem'} mb={'1rem'} display={'grid'} gridTemplateColumns={['1fr', null, null, 'auto auto']}
                 justifyContent={'space-between'} alignItems={'center'}
            >
                <Heading fontSize={'36px'} fontWeight={'bold'}>
                    Learning Resources
                </Heading>
                <Box display={'flex'} justifyContent={'flex-end'} py={['1rem', null, null, '0']}>
                    <BlueButtonFilled onClick={onOpen} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        Create New <FiPlus style={{marginLeft: '.5rem'}} size={'20'}/>
                    </BlueButtonFilled>
                </Box>
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

            {/*   Create Learning Resource Modal   */}

            <Modal size={'2xl'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    {/*<ModalHeader>Modal Title</ModalHeader>*/}
                    <ModalCloseButton style={{borderRadius: '50%'}}/>
                    <ModalBody py={12}>
                        <Box>
                            <Heading fontSize={'36px'} fontWeight={'bold'}>
                                Create Learning Resource
                            </Heading>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <VStack alignItems={'flex-start'} spacing={4} mt={'1.5rem'}>

                                    <FormControl isInvalid={!!errors.name}>
                                        {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                                        <InputGroup>
                                            <Input {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'You must have to specify your learning path name.',
                                                    },

                                                }
                                            )}
                                                   placeholder="Name your learning path"
                                            />
                                            {/*<InputRightElement children={<CheckIcon color="green.500" />} />*/}
                                        </InputGroup>
                                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={!!errors.url}>
                                        {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                                        <InputGroup>
                                            <Input {...register("url", {
                                                    required: {
                                                        value: true,
                                                        message: 'You must have to specify your learning path url.',
                                                    },

                                                }
                                            )}
                                                   placeholder="Paste URL of resource"
                                            />
                                            {/*<InputRightElement children={<CheckIcon color="green.500" />} />*/}
                                        </InputGroup>
                                        <FormErrorMessage>{errors.url?.message}</FormErrorMessage>
                                    </FormControl>

                                    <Box display={'grid'}
                                         placeItems={'center'}
                                         w={'100%'}
                                         placeContent={'center'}
                                         gridTemplateColumns={['1fr',null,'1fr 1fr']}
                                         gridGap={'2rem'}
                                    >
                                        <Box cursor={'pointer'} p={'1.5rem'} height={'15rem'} w={'100%'} border={'3px dashed #eee'} _hover={{
                                            borderColor: '#25CED1',
                                        }} {...getRootProps({style: dropzoneStyle})}>

                                            <input {...getInputProps()}/>
                                            <Box display={'flex'} justifyContent={'center'}>
                                                <img src="/userProfile/fileUpload.svg" alt="Upload File"/>
                                            </Box>
                                            <Box mt={'1rem'} color={'brand.blue'} textAlign={'center'}>Upload Cover Image</Box>
                                        </Box>

                                        {/*Showing the accepted files*/}

                                            {acceptedFiles.length ? acceptedFiles.map((file, index) => (
                                                <Box key={index}>
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={file.name}
                                                        style={{width: 'auto', height: '15rem'}}
                                                    />
                                                </Box>
                                            )) : null}


                                        {/*Error Message*/}
                                            {fileRejections.length ? fileRejections.map((file, index) => (
                                                <Box mt={'1rem'} key={index}>
                                                    {file.errors.map(err => (
                                                        <Box color={'brand.red'} textAlign={'center'}>
                                                            {err.message}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )) : null}

                                    </Box>

                                    <BlueButtonFilled type={'submit'}>
                                        Create
                                    </BlueButtonFilled>

                                </VStack>
                            </form>

                        </Box>
                    </ModalBody>

                    {/*<ModalFooter>*/}
                    {/*   footer*/}
                    {/*</ModalFooter>*/}
                </ModalContent>
            </Modal>

        </Box>

    );
};

export default LearningResourceSection;