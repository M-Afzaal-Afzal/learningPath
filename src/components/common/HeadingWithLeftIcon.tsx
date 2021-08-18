import React from 'react';
import {Box, BoxProps, forwardRef, Heading} from "@chakra-ui/react";

const BlueButtonFilled = forwardRef<BoxProps, 'h1'>(({children, ...props}, ref) => {
    return (
        <Heading pl={'2rem'}
                 ref={ref}
                 fontSize={['40px',null,'45px',null,'56px']}
                 pos={'relative'}
                 {...props}
        >
            {children}
            {/* Side design icon */}
            <Box pos={'absolute'} w={0} h={0}
                 borderRight={'22px solid #FF8A5B'}
                 borderTop={'22px solid transparent'}
                 bottom={'14px'}
                 left={0}
            />
        </Heading>
    );
});

export default BlueButtonFilled;