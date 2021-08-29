import React from 'react';
import { forwardRef, Box, BoxProps} from "@chakra-ui/react";

const NewTag = forwardRef<BoxProps, 'div'>(({children, ...props}, ref) => {
    return (
        <Box fontSize={'12px'} borderRadius={'lg'} px={'8px'} py={'6px'} color={'brand.blue'} bg={'rgba(37, 206, 209, 0.1)'} cursor={'pointer'} ref={ref}>
            {children}
        </Box>
    );
});

export default NewTag;