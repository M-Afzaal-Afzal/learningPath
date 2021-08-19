import React from 'react';
import {Box, BoxProps, forwardRef} from "@chakra-ui/react";

const OrangeButtonFilled = forwardRef<BoxProps,'button'> (({children,...props}, ref)=> {
    return (
        <Box
            as={'button'}
            borderRadius={'4px'}
            display={'inline-block'}
            padding={'3px 25px'}
            color={'white'} fontSize={'20px'}
            fontWeight={500}
            cursor={'pointer'}
            background={'brand.orange'}
            border={'3px solid'}
            borderColor={'brand.orange'}
            transition={'all .3s linear'}
            _hover={{
                background: '#fd6d32',
                borderColor: '#fd6d32',
            }}
            ref={ref}
            {...props}
        >
            {children}
        </Box>
    );
});

export default OrangeButtonFilled;