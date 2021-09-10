import React, {useEffect, useMemo, useState} from 'react';
import {
    Box,
    FormControl,
    FormErrorMessage,
    Heading, HStack, IconButton,
    Input,
    InputGroup, InputRightElement,
    Select, Tag, Textarea, VStack
} from "@chakra-ui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import BlueButtonFilled from "../buttons/blueButtonFilled";
import {useDropzone} from 'react-dropzone';
import {FiArrowLeft, FiPlus} from 'react-icons/fi';

import LearningResourceSection from "./LearningResourceSection";

interface ILearningPathPageProps {
    learningPathPageToggler: () => void;
}

type Inputs = {
    name: string,
    category: string,
    language: string;
    description: string;
    image: string;
    tag: string;
};

const CreateLearningPathPage: React.FC<ILearningPathPageProps> = ({learningPathPageToggler}) => {

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

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        setError,
        clearErrors,
        formState: {errors, isSubmitted}
    } = useForm<Inputs>();
    const [tags, setTags] = useState<string[]>([]);

    const tagValue = watch('tag');

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!acceptedFiles.length) {
            console.log('You must have to upload your cover image')
            return;
        }
        console.log(data)
        console.log(acceptedFiles);
        console.log(tags);
    };

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

    useEffect(() => {
        if (tags.length >= 3) {
            clearErrors('tag');
        }

        if (isSubmitted && tags.length < 3) {
            setError('tag', {
                message: 'You must have to specify three tags',
            });
        }
    }, [tags, isSubmitted])


    return (
        <Box gridColumn={['1/-1', null, null, null, null, '2/-1']}
             bg={'#fff'}
             py={'2rem'}
             px={['1rem', null, '2rem', '3rem', '4rem']}
        >

            <Box mb={'1.5rem'}>
                <IconButton onClick={learningPathPageToggler} background={'#eee'} isRound aria-label={'back'}>
                    <FiArrowLeft size={25}/>
                </IconButton>
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display={'grid'} gridColumnGap={'3rem'} gridTemplateColumns={['1fr', null, null, '2fr 1fr']}>

                    <Box>
                        <Heading fontSize={'36px'} fontWeight={'bold'}>
                            Create Learning Paths
                        </Heading>

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

                            <FormControl id="category" isInvalid={!!errors.category}>
                                {/*<FormLabel>Country</FormLabel>*/}
                                <Select {...register("category", {
                                        required: {
                                            value: true,
                                            message: 'You must have to specify category.',
                                        },

                                    }
                                )} color={'brand.blue'} iconColor={'brand.blue'}
                                        placeholder="Select Category">
                                    <option>Development</option>
                                    <option>Computer</option>
                                    <option>Science</option>
                                </Select>
                                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl id="category" isInvalid={!!errors.language}>
                                {/*<FormLabel>Country</FormLabel>*/}
                                <Select {...register("language", {
                                        required: {
                                            value: true,
                                            message: 'You must have to specify language.',
                                        },

                                    }
                                )} color={'brand.blue'} iconColor={'brand.blue'}
                                        placeholder="Select Language">
                                    <option>Eng</option>
                                    <option>Urdu</option>
                                    <option>Punjabi</option>
                                </Select>
                                <FormErrorMessage>{errors.language?.message}</FormErrorMessage>
                            </FormControl>

                            <Heading pt={'2rem'} textAlign={'left'} fontSize={'24px'}>
                                Tags
                            </Heading>

                            <FormControl isInvalid={!!errors.tag}>
                                {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                                <InputGroup>
                                    <Input zIndex={1} {...register("tag"
                                    )}
                                           placeholder="Tag"
                                    />
                                    <InputRightElement children={
                                        <IconButton onClick={() => {

                                            if (tagValue) {
                                                setTags((prevTags) => [...prevTags, tagValue]);
                                                setValue('tag', '');
                                            }

                                        }} padding={'4px'} borderRadius={'md'} color={'brand.blue'}
                                                    aria-label={'add button'}>
                                            <FiPlus size={25}/>
                                        </IconButton>
                                    }/>
                                </InputGroup>
                                <FormErrorMessage>{errors.tag?.message}</FormErrorMessage>
                            </FormControl>

                            <Box w={'100%'}>
                                <HStack spacing={4}>
                                    {tags.map((tag, index) => (
                                        <Tag size={'lg'} key={index} variant="solid" colorScheme="blue">
                                            {tag}
                                        </Tag>
                                    ))}
                                </HStack>
                            </Box>

                            <Heading pt={'2rem'} textAlign={'left'} fontSize={'24px'}>
                                Description
                            </Heading>

                            <FormControl isInvalid={!!errors.description}>
                                {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                                <InputGroup>
                                    <Textarea cols={8} height={'10rem'}  {...register("description", {
                                            required: {
                                                value: true,
                                                message: 'You must have to specify description.',
                                            },

                                        }
                                    )}
                                              placeholder="Description"
                                    />
                                    {/*<InputRightElement children={<CheckIcon color="green.500" />} />*/}
                                </InputGroup>
                                <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
                            </FormControl>


                            <BlueButtonFilled type={'submit'}>
                                Create
                            </BlueButtonFilled>

                        </VStack>
                    </Box>

                    <Box order={[-1, null, null, 0]} mt={'4.2rem'}>


                        <Box>
                            <Box cursor={'pointer'} p={'1.5rem'} w={'100%'} border={'3px dashed #eee'} _hover={{
                                borderColor: '#25CED1',
                            }} {...getRootProps({style: dropzoneStyle})}>

                                <input {...getInputProps()}/>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <img src="/userProfile/fileUpload.svg" alt="Upload File"/>
                                </Box>
                                <Box mt={'1rem'} color={'brand.blue'} textAlign={'center'}>Upload Cover Image</Box>
                            </Box>

                        </Box>

                        {/*Showing the accepted files*/}
                        <Box>
                            {acceptedFiles.length ? acceptedFiles.map((file, index) => (
                                <Box mt={'1rem'} key={index}>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        style={{width: '100%', height: 'auto'}}
                                    />
                                </Box>
                            )) : null}
                        </Box>

                        {/*Error Message*/}
                        <Box>
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


                    </Box>

                </Box>
            </form>

            {/* Learning Resources */}
            <Box>

                <LearningResourceSection/>

            </Box>

        </Box>
    );
};

export default CreateLearningPathPage;
