import React from 'react';
import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box, Text,
    useRadioGroup,
    VStack
} from "@chakra-ui/react";
import CustomRadioButton from "./CustomRadioButton";

const AccordionItemSubject = () => {

    // Subject options
    const options = ["Web Development", "Frontend", "Backend"]

    const subjectChangeHandler = (language) => {
        console.log(language)
    }

    const {getRootProps , getRadioProps} = useRadioGroup({
        name: "Language",
        defaultValue: "English",
        onChange: subjectChangeHandler,
    })

    const group = getRootProps();

    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        Subject
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
                <VStack alignItems={'flex-start'} {...group}>
                    {options.map((value) => {
                        const radio = getRadioProps({value})
                        return (
                            <CustomRadioButton key={value} {...radio}>
                                {value}
                            </CustomRadioButton>
                        )
                    })}

                    <Box py={'.5rem'} w={'100%'} display={'flex'} justifyContent={'center'}>
                        <Text as={'button'} color={'brand.blue'} textAlign={'center'}>
                            Show all
                        </Text>
                    </Box>


                </VStack>
            </AccordionPanel>
        </AccordionItem>
    );
};

export default AccordionItemSubject;