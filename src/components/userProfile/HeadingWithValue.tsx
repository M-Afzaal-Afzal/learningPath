import React from 'react';
import {Box, Text} from "@chakra-ui/react";

interface IHeadingWithValueProps {
    heading: string;
    value: number | string;
}

const HeadingWithValue: React.FC<IHeadingWithValueProps> = ({heading,value}) => {
    return (
        <Box justifyContent={'space-between'} height={'100%'} display={'grid'} gridTemplateColumns={['auto auto',null,null,null,null,'1fr']} gridTemplateRows={['1fr',null,null,null,null,'auto 1fr']}>
            <Box px={'1rem'} borderBottom={['0',null,null,null,null,'1px solid #eee']}>
                <Text>
                    {heading}
                </Text>
            </Box>
            <Box px={'1rem'} display={'flex'} alignItems={'center'}>
                <Text fontSize={'18px'}>
                    {value}
                </Text>
            </Box>
        </Box>
    );
};

export default HeadingWithValue;