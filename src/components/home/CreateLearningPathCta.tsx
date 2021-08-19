import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
import Image from 'next/image'
import OrangeButtonFilled from "../buttons/orangeButtonFilled";

const CreateLearningPathCta = () => {
    return (
        <Box bg={'brand.blue'} pt={'6rem'}>
            <Container maxW={'container.xl'}>

                <Box display={'grid'}
                     gridTemplateRows={'auto'}
                     gridTemplateColumns={['1fr',null,null,null,null,'repeat(12,1fr)']}
                     placeItems={['center',null,null,null,null,'start']}
                >

                    <Box display={['none',null,null,null,null,'block']} alignSelf={'end'} gridRow={['auto',null,null,null,null,'1/-1']} gridColumn={['auto',null,null,null,null,'1/7']}>
                        <Image
                            src={'/home/manWithBooks.png'}
                            width={1120}
                            height={550}
                            layout={'intrinsic'}
                        />
                    </Box>

                    <Box gridRow={['auto',null,null,null,null,'1/-1']} gridColumn={['auto',null,null,null,null,'6/-1']}>
                        <Box mb={'2rem'}>
                            <Heading color={'#fff'} fontSize={['30px','35px','40px','45px','50px']}>
                                Learn and Share <br/>
                                Create your own <br/>
                                learning path <br/>
                            </Heading>
                        </Box>

                        <Box pb={'4rem'}>
                            <OrangeButtonFilled>
                                Create a new path
                            </OrangeButtonFilled>
                        </Box>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default CreateLearningPathCta;