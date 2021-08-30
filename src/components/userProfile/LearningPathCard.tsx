import React from 'react';
import {Box, Text} from "@chakra-ui/react";
import Image from "next/image";
import {FiEdit,FiAirplay,FiShare2,FiTrash} from 'react-icons/fi';
import HeadingWithValue from "./HeadingWithValue";

const LearningPathCard = () => {
    return (
        <Box w={['20rem',null,null,'100%','100%']}
             display={'grid'}
             gridTemplateColumns={['1fr',null,null,null,null,'160px auto']}
        >
            {/* Image container*/}
            <Box width={['20rem',null,null,'100%','100%','162px']}
                 height={['14rem',null,null,null,null,'120px']}
                 pos={'relative'}
            >
                <Image
                    src={'/publicView/1.png'}
                    alt={'Learning Path'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </Box>

            {/* other stats*/}
            <Box boxShadow={'0px 12px 24px 0px rgba(0, 0, 0, 0.08)'} borderRadius={'lg'}
                 pt={['1rem',null,null,null,null,'0']} display={'grid'}
                 gridGap={['.5rem',null,null,null,null,0]} gridTemplateColumns={['1fr',null,null,null,null,'2fr 1fr 1fr 2fr']}
            >



                <HeadingWithValue heading={'Name'} value={'UI/UX Design'}/>

                <HeadingWithValue heading={'Impressions'} value={800}/>

                <HeadingWithValue heading={'Clicks'} value={80}/>

                <Box pb={['1rem',null,null,null,null,0]}
                     justifyContent={['center',null,null,null,null,'space-between']}
                     height={'100%'}
                     display={'grid'}
                     gridTemplateColumns={['auto',null,null,null,null,'1fr']}
                     gridTemplateRows={['1fr',null,null,null,null,'auto 1fr']}

                >
                    <Box px={'1rem'}
                         display={['none',null,null,null,null,'block']}
                         borderBottom={['0',null,null,null,null,'1px solid #eee']}
                    >
                        <Text >
                            &nbsp;
                        </Text>
                    </Box>
                    <Box px={'1rem'} display={'flex'} alignItems={'center'}>
                        <Box color={'brand.blue'}
                             display={'grid'}
                             alignItems={'center'}
                             gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}
                             gridGap={'1rem'} justifyContent={'space-between'}
                        >
                            <FiEdit cursor={'pointer'} size={'20px'}/>
                            <FiAirplay cursor={'pointer'} size={'20px'}/>
                            <FiShare2 cursor={'pointer'} size={'20px'}/>
                            <FiTrash cursor={'pointer'} color={'#EA5252'} size={'20px'}/>
                            <Text as={'button'} cursor={'pointer'}>
                                Statistics
                            </Text>

                        </Box>
                    </Box>
                </Box>


            </Box>

        </Box>
    );
};

export default LearningPathCard;