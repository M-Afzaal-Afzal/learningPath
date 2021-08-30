import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import BlueButtonFilled from "../buttons/blueButtonFilled";
import {FiPlus} from 'react-icons/fi';

import LearningPathCard from "./LearningPathCard";

const LearningPathsPage = () => {
    return (
        <Box gridColumn={['1/-1', null, null, null, null, '2/-1']}
             bg={'#fff'}
             py={'2rem'}
             px={['1rem', null, '2rem', '3rem', '4rem']}
        >
            <Box display={'grid'} gridTemplateColumns={['1fr', null, null, 'auto auto']}
                 justifyContent={'space-between'} alignItems={'center'}>
                <Heading fontSize={'36px'} fontWeight={'bold'}>
                    My Learning Paths
                </Heading>
                <Box display={'flex'} justifyContent={'flex-end'} py={['1rem',null,null,'0']}>
                    <BlueButtonFilled display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        Create New <FiPlus style={{marginLeft: '.5rem'}} size={'20'}/>
                    </BlueButtonFilled>
                </Box>
            </Box>

            {/* Learning cards container*/}
            <Box display={'grid'}
                 placeItems={'center'}
                 gridGap={'1rem'}
                 py={'1.5rem'}
                 gridTemplateColumns={['1fr', null, null, '1fr 1fr', '1fr 1fr 1fr', '1fr']}
            >

                <LearningPathCard/>
                <LearningPathCard/>
                <LearningPathCard/>
                <LearningPathCard/>
                <LearningPathCard/>
                <LearningPathCard/>

            </Box>

        </Box>
    );
};

export default LearningPathsPage;