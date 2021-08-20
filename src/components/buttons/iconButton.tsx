import React from 'react';
import {Box, BoxProps, forwardRef, HStack} from "@chakra-ui/react";
import Image from "next/image";

interface IiconButton extends BoxProps{
    iconPath: string;
}

const IconButton = forwardRef<IiconButton,'button'> (({children,iconPath,...props}, ref)=> {
    return (
        <Box
            py={'.8rem'}
            bg={'rgba(244, 245, 245, 1)'}
            transition={'all .3s linear'}
            _hover={{
                background: 'rgb(222,222,222)',
            }}
            as={'button'}
            borderRadius={'4px'}
            ref={ref}
            {...props}
        >
            <HStack justifyContent={'center'} alignItems={'center'}>
                <Image
                    width={22}
                    height={22}
                    layout={'intrinsic'}
                    src={iconPath}
                />
                <Box>
                    {children}
                </Box>
            </HStack>
        </Box>
    );
});

export default IconButton;