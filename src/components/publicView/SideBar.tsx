import React from 'react';
import {Avatar, Box, Heading, Text} from "@chakra-ui/react";
import {FiHeart} from "react-icons/fi";
import OrangeButtonFilled from "../buttons/orangeButtonFilled";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

interface ISidebar {
    isMobileNav?: boolean;
}

const SideBar : React.FC<ISidebar> = ({isMobileNav}) => {

    const heartClickHandler = () => {
        console.log('clicked on heart')
    }

    return (
        <Box
            py={'2rem'}
            display={[isMobileNav ? 'block' : 'none', null, null, null, null, 'block']}
            bg={'brand.bgGrey'}
            pos={'relative'}
        >

            {/* Heart icon*/}
            <Box my={'1rem'} display={'flex'} mr={'1.5rem'} justifyContent={'flex-end'}>
                <FiHeart onClick={heartClickHandler} fill={'red'} style={{cursor: 'pointer'}} color={'red'}
                         size={25}
                />
            </Box>

            <Box display={'flex'} justifyContent={'center'}>
                <Avatar size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
            </Box>

            <Box px={'1rem'} mt={'2rem'} display={'flex'} justifyContent={'space-between'}>

                {/* Left Icon*/}
                <Box>
                    <Heading fontSize={'20px'}>
                        M Afzaal Afzal
                    </Heading>
                    <Text fontSize={'14px'} color={'brand.textGrey'}>
                        UX/UI Designer
                    </Text>
                </Box>

                {/* Right Button*/}
                <Box>
                    <OrangeButtonFilled fontSize={'1rem'} px={'.5rem'}>
                        Contact Me
                    </OrangeButtonFilled>
                </Box>

            </Box>

            <Box mt={'1rem'} px={'1rem'} display={'flex'} alignItems={'center'}>
                {/*<Rate allowHalf value={4.7}/> (4.7)*/}
                <Rating
                    readonly
                    emptySymbol={<AiOutlineStar color={'rgba(255, 228, 86, 1)'} size={25}/>}
                    fullSymbol={<AiFillStar size={25} color={'rgba(255, 228, 86, 1)'}/>}
                    fractions={10}
                    initialRating={4.7}
                />
                <Box fontSize={'1.5rem'}>
                    (4.7)
                </Box>
            </Box>

            <Box mt={'1rem'} px={'1rem'} display={'flex'} justifyContent={'space-between'}>

                {/* Left */}
                <Box>
                    <Text fontWeight={'bold'}>
                        From:
                    </Text>
                </Box>

                {/* Right*/}
                <Box>
                    <Text color={'brand.textGrey'}>
                        Ukraine
                    </Text>
                </Box>

            </Box>

            <Box mt={'1rem'} px={'1rem'} display={'flex'} justifyContent={'space-between'}>

                {/* Left */}
                <Box>
                    <Text fontWeight={'bold'}>
                        Member since:
                    </Text>
                </Box>

                {/* Right*/}
                <Box>
                    <Text color={'brand.textGrey'}>
                        Jule 2021
                    </Text>
                </Box>

            </Box>

            {/* description*/}
            <Box my={'1rem'} px={'1rem'}>
                <Text fontWeight={'bold'}>
                    Description
                </Text>
            </Box>

            {/* description*/}
            <Box px={'1rem'}>
                <Text color={'brand.textGrey'}>
                    I’ve been working as a designer for 3,5+ years. I’ve got experience as a graphic, web
                    designer and now I’ve grown
                    up to a UX/UI designer. The main goal
                    in my profession is to solve problems.
                    It may be problems concerning business issues, user experience issues as well
                    as visual design issues. On my experience there are 100+ projects done already. Feel
                    free to
                    contact me, if you need any help with design
                </Text>
            </Box>


        </Box>
    );
};

export default SideBar;