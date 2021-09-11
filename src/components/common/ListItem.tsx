import React from 'react';
import {Box, BoxProps, forwardRef, HStack, Text} from "@chakra-ui/react";
import {FiCircle} from "react-icons/fi";

const ListItem = forwardRef<BoxProps,'div'> (({children,...props}, ref)=> {
    return (
        <HStack alignItems={'baseline'} ref={ref} {...props}>
            <Box color={'brand.blue'}>
                <FiCircle size={10}/>
            </Box>
            <Text fontSize={'16px'}>
                {children}
            </Text>
        </HStack>
    );
});

export default ListItem;