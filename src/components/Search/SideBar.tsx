import React from 'react';
import {Box,Text} from "@chakra-ui/react";
import {Select} from "@chakra-ui/react"

import {
    Accordion,

} from "@chakra-ui/react"

import AccordionItemRating from "./AccordionItemRating";
import AccordionItemLanguages from "./AccordionItemLanguages";
import AccordionItemLevel from "./AccordionItemLevel";
import AccordionItemSubject from "./AccordionItemSubject";
import AccordionItemSkills from "./AccordionItemSkills";

interface ISidebar {
    isMobileNav?: boolean;
}

const SideBar: React.FC<ISidebar> = ({isMobileNav}) => {

    return (
        <Box
            py={'2rem'}
            display={[isMobileNav ? 'block' : 'none', null, null, null, null, 'block']}
            bg={'brand.bgGrey'}
            pos={'relative'}

        >

            <Box display={'flex'} flexDir={'column'} alignItems={'center'}>

                <Box w={'90%'} py={'4rem'} px={2}>

                    <Select color={'brand.blue'} iconColor={'brand.blue'} borderColor={'brand.blue'}
                            placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>

                    <Text py={'1.5rem'} fontSize={'20px'} fontWeight={'bold'}>
                        Filter
                    </Text>

                    <Box>
                        <Accordion defaultIndex={[0]} allowMultiple>

                            <AccordionItemLanguages/>

                            <AccordionItemRating/>

                            <AccordionItemLevel/>

                            <AccordionItemSubject/>

                            <AccordionItemSkills/>

                        </Accordion>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
};

export default SideBar;