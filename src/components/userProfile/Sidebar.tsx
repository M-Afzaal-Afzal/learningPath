import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import {FiAward, FiBookOpen, FiLogOut, FiSettings, FiUser} from "react-icons/fi";

interface ISidebar {
    isMobileNav?: boolean;
    activeLink?: Number;
    activeLinkToggler?: (index) => void;
}

const Sidebar: React.FC<ISidebar> = ({isMobileNav, activeLink, activeLinkToggler}) => {

    const links = [
        {
            id: 1,
            icon: <FiUser style={{marginRight: '1rem'}} size={'20'} color={'#25CED1'}/>,
            text: 'My Profile',
        }, {
            id: 2,
            icon: <FiBookOpen style={{marginRight: '1rem'}} size={'20'} color={'#25CED1'}/>,
            text: 'Learning Paths',
        }, {
            id: 3,
            icon: <FiAward style={{marginRight: '1rem'}} size={'20'} color={'#25CED1'}/>,
            text: 'Favourite Paths',
        }, {
            id: 4,
            icon: <FiSettings style={{marginRight: '1rem'}} size={'20'} color={'#25CED1'}/>,
            text: 'Settings',
        },
    ];

    return (
        <Box
            display={[isMobileNav ? 'block' : 'none', null, null, null, null, 'block']}
            bg={'brand.bgGrey'}
        >

            <Box display={'grid'} gridTemplateRows={'1fr auto'} position={'sticky'}
                 minH={'calc(100vh - 80px)'}
                 py={'2rem'}
                 top={'80px'}
                 justifyContent={'center'}
            >

                <VStack spacing={10} alignItems={'flex-start'}>
                    {
                        links.map((link, index) => (
                            <Box onClick={() => {
                                activeLinkToggler(index)
                            }} fontWeight={activeLink === index && 'bold'} as={'button'} cursor={'pointer'}
                                 key={link.id}
                                 display={'grid'}
                                 alignItems={'center'}
                                 gridTemplateColumns={'auto 1fr'}
                                 fontSize={'20px'}
                                 w={'13rem'}
                                 justifyItems={'start'}
                            >
                                {link.icon}
                                {link.text}
                            </Box>
                        ))
                    }


                </VStack>

                <Box>
                    <Box cursor={'pointer'} display={'flex'} alignItems={'center'} fontSize={'20px'}>
                        <FiLogOut style={{marginRight: '1rem'}} size={'20'} color={'#25CED1'}/>
                        Log Out
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Sidebar;