import React from 'react';
import { BoxProps, forwardRef, Heading} from "@chakra-ui/react";

const BlueHeading = forwardRef<BoxProps, 'h1'>(({children, ...props}, ref) => {
    return (
        <Heading
                 ref={ref}
                 fontSize={['25px',null,'30px',null,'36px']}
                 pos={'relative'}
                 color={'brand.blue'}
                 {...props}
        >
            {children}

        </Heading>
    );
});

export default BlueHeading;