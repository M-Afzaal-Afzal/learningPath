import React from 'react';
import {TextProps, forwardRef, Text, Box} from "@chakra-ui/react";

const BlueHeading = forwardRef<TextProps, 'h1'>(({children, ...props}, ref) => {
    return (
       <Box cursor={'pointer'} ref={ref}>
           <Text  fontSize={['1rem',null,'20px']} fontWeight={'bold'}>
               Python
           </Text>
           <Text color={'rgba(198, 198, 198, 1)'} fontSize={['12px',null,'16px']}>
               12,289 paths
           </Text>
       </Box>
    );
});

export default BlueHeading;