import React from 'react';
import {Box, BoxProps, forwardRef} from "@chakra-ui/react";

const BlueButtonOutlined = forwardRef<BoxProps,'button'> (({children,...props}, ref)=> {
    return (
        <Box
            pos={'relative'}
            as={'button'}
            borderRadius={'4px'}
            display={'inline-flex'}
            justifyContent={'center'}
            alignItems={'center'}
            padding={'3px 25px'}
            color={'brand.blue'}
            fontSize={'20px'}
            fontWeight={500}
            cursor={'pointer'}
            background={'white'}
            border={'3px solid'}
            borderColor={'brand.blue'}
            transition={'all .3s linear'}
            _hover={{
                background: 'brand.bgGrey',
            }}
            ref={ref}
            {...props}
        >
            {children}

        </Box>
    );
});

export default BlueButtonOutlined;