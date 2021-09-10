import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import BlueButtonFilled from "../buttons/blueButtonFilled";
import {FiPlus} from 'react-icons/fi';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import LearningPathCard from "./LearningPathCard";

interface ILearningPathPageProps {
    learningPathPageToggler: () => void;
}

const LearningPathsPage: React.FC<ILearningPathPageProps> = ({learningPathPageToggler}) => {
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
                <Box display={'flex'} justifyContent={'flex-end'} py={['1rem', null, null, '0']}>
                    <BlueButtonFilled onClick={learningPathPageToggler} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        Create New <FiPlus style={{marginLeft: '.5rem'}} size={'20'}/>
                    </BlueButtonFilled>
                </Box>
            </Box>

            {/* Learning cards container*/}
            <Box py={'1rem'}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 1}}
                >
                    <Masonry gutter={'1rem'}>
                        <LearningPathCard/>
                        <LearningPathCard/>
                        <LearningPathCard/>
                        <LearningPathCard/>
                        <LearningPathCard/>
                        <LearningPathCard/>
                    </Masonry>
                </ResponsiveMasonry>
            </Box>

            {/*</Box>*/}

        </Box>
    );
};

export default LearningPathsPage;