import React from 'react';
import {Box, BoxProps, forwardRef} from "@chakra-ui/react";

const TextButton = forwardRef<BoxProps,'button'> (({children,...props}, ref)=> {
    return (
        <Box
            as={'button'}
            // borderRadius={'4px'}
            display={'inline-block'}
            fontSize={'1rem'}
            // padding={'3px 25px'}
            color={'white'}
            fontWeight={'normal'}
            cursor={'pointer'}
            transition={'all .3s linear'}
            _hover={{
                color: 'brand.blue',
            }}
            ref={ref}
            {...props}
        >
            {children}
        </Box>
    );
});

export default TextButton;