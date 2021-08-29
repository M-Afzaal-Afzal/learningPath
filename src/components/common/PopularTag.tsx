import React from 'react';
import { forwardRef, Box, BoxProps} from "@chakra-ui/react";

const PopularTag = forwardRef<BoxProps, 'div'>(({children, ...props}, ref) => {
    return (
        <Box
            fontSize={'12px'}
            borderRadius={'lg'}
            px={'8px'} py={'6px'}
            color={'brand.orange'}
            bg={'rgba(255, 138, 91, 0.1)'}
            cursor={'pointer'}
            ref={ref}
        >
            {children}
        </Box>
    );
});

export default PopularTag;