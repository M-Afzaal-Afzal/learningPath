import React from 'react';
import {useRadio} from "@chakra-ui/radio";
import {Box} from "@chakra-ui/react";

const CustomRadioButton = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box display={'flex'} alignItems={'center'} as="label">
            <input {...input} />
            <Box

                {...checkbox}
                cursor="pointer"
                borderWidth="2px"
                borderRadius="sm"
                boxShadow="md"
                borderColor={"brand.blue"}
                _checked={{
                    bg: "brand.blue",
                    color: "white",
                    borderColor: "brand.blue",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                w={'18px'}
                h={'18px'}
                mr={3}
            />


        <Box cursor={'pointer'} display={'inline-block'}>
            {props.children}

        </Box>

        </Box>
    )
}

export default CustomRadioButton;