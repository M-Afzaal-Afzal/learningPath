import React, {useState} from 'react';
import {Box, Button, Collapse, Heading, HStack, Text, useDisclosure, VStack} from "@chakra-ui/react";
import Image from "next/image";
import {FiEdit, FiAirplay, FiShare2, FiTrash} from 'react-icons/fi';
import HeadingWithValue from "./HeadingWithValue";
import BlueButtonOutlined from "../buttons/blueButtonOutlined";
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {FaAngleDown} from "react-icons/fa";
import {FiChevronUp} from 'react-icons/fi';

const impressionsData = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];

const clicksData = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];

const LearningPathCard = () => {

    const {isOpen: isStatisticsShow, onToggle: statisticsShowToggler} = useDisclosure();

    const [isSortOptionShow, setIsSortOptionShow] = useState<Boolean>(false);

    const toggleIsSortOptionShow = () => {
        setIsSortOptionShow(prevState => !prevState);
    }

    const sortOptions = ['Name', 'Age','Email'];

    const sortOptionClickHandler = (opt) => {
        console.log(opt)
    }

    return (
        <Box w={['20rem', null, null, '100%', '100%']}
             display={'grid'}
             gridTemplateColumns={['1fr', null, null, null, null, '160px auto']}
             boxShadow={'0px 12px 24px 0px rgba(0, 0, 0, 0.08)'}
             borderRadius={'lg'}
             m={'auto'}
        >
            {/* Image container*/}
            <Box width={['20rem', null, null, '100%', '100%', '162px']}
                 height={['14rem', null, null, null, null, '120px']}
                 pos={'relative'}
            >
                <Image
                    src={'/publicView/1.png'}
                    alt={'Learning Path'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </Box>

            {/* other stats*/}
            <Box
                pt={['1rem', null, null, null, null, '0']} display={'grid'}
                gridGap={['.5rem', null, null, null, null, 0]}
                gridTemplateColumns={['1fr', null, null, null, null, '2fr 1fr 1fr 2fr']}
                boxShadow={'0px 12px 24px 0px rgba(0, 0, 0, 0.08)'}
                borderRadius={'lg'}
            >

                <HeadingWithValue heading={'Name'} value={'UI/UX Design'}/>

                <HeadingWithValue heading={'Impressions'} value={800}/>

                <HeadingWithValue heading={'Clicks'} value={80}/>

                <Box pb={['1rem', null, null, null, null, 0]}
                     justifyContent={['center', null, null, null, null, 'space-between']}
                     height={'100%'}
                     display={'grid'}
                     gridTemplateColumns={['auto', null, null, null, null, '1fr']}
                     gridTemplateRows={['1fr', null, null, null, null, 'auto 1fr']}

                >
                    <Box px={'1rem'}
                         display={['none', null, null, null, null, 'block']}
                         borderBottom={['0', null, null, null, null, '1px solid #eee']}
                    >
                        <Text>
                            &nbsp;
                        </Text>
                    </Box>
                    <Box px={'1rem'} display={'flex'} alignItems={'center'}>
                        <Box color={'brand.blue'}
                             display={'grid'}
                             alignItems={'center'}
                             gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}
                             gridGap={'1rem'} justifyContent={'space-between'}
                        >
                            <FiEdit cursor={'pointer'} size={'20px'}/>
                            <FiAirplay cursor={'pointer'} size={'20px'}/>
                            <FiShare2 cursor={'pointer'} size={'20px'}/>
                            <FiTrash cursor={'pointer'} color={'#EA5252'} size={'20px'}/>
                            <Text onClick={statisticsShowToggler} as={'button'} cursor={'pointer'}>
                                Statistics
                            </Text>

                        </Box>
                    </Box>
                </Box>


            </Box>

            {/*    statistic Details*/}

            <Box gridColumn={'1/-1'}>

                <Collapse in={isStatisticsShow} animateOpacity>
                    <Box
                        p="1rem"
                        pt={'2rem'}
                    >
                        {/* Top Heading and button*/}
                        <Box display={'grid'}
                             gridGap={'1rem'}
                             gridTemplateColumns={['1fr', null, null, null, null, '1fr auto']}
                             justifyContent={'space-between'}
                             alignItems={'center'}
                        >
                            <Heading fontSize={'24px'} fontWeight={'bold'}>
                                Statistics
                            </Heading>

                            <Box pos={'relative'}>

                                <BlueButtonOutlined onClick={toggleIsSortOptionShow}>
                                    <HStack as={'button'} cursor={'pointer'}>
                                        <Box>
                                            Sort By
                                        </Box>
                                        <FaAngleDown size={20}/>
                                    </HStack>
                                </BlueButtonOutlined>

                                <VStack
                                    opacity={isSortOptionShow ? 1 : 0}
                                    zIndex={isSortOptionShow ? 20 : -5}
                                    visibility={isSortOptionShow ? 'visible' : "hidden"}
                                    // transform={isCategoriesShow ? 'scale(1)' : 'scale(0)'}
                                    transition={'all .3s linear'}
                                    top={'3rem'}
                                    right={'0'}
                                    pos={'absolute'}
                                    width={'15rem'}
                                    padding={'1rem'}
                                    bg={'brand.bgGrey'}
                                    boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}
                                    borderRadius={'lg'}
                                >
                                    {
                                        sortOptions.map((category, index) => (
                                            <Button onClick={sortOptionClickHandler.bind(this, category)} key={index}
                                                    isFullWidth={true}>
                                                {category}
                                            </Button>
                                        ))
                                    }

                                </VStack>

                            </Box>
                        </Box>

                        <Box py={'1rem'} display={'grid'} gridGap={'1rem'}
                             gridTemplateColumns={['1fr', null, null, null, null, '1fr 1fr']}
                        >
                            {/*    Impressions chart */}

                            <Box p={'.5rem'} height={'300px'} bg={'rgba(244, 245, 245, 1)'} pb={'3rem'}>

                                <Box pb={'1.5rem'}>
                                    <Text fontWeight={'bold'}>
                                        Impressions
                                    </Text>
                                </Box>

                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={550} height={250} data={impressionsData}
                                               margin={{top: 5, right: 30, left: 20, bottom: 5}}
                                    >
                                        {/*<CartesianGrid strokeDasharray="3 3" />*/}
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Legend/>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
                                        {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>

                            {/* Clicks Chart   */}
                            <Box p={'.5rem'} bg={'rgba(244, 245, 245, 1)'} height={'300px'} pb={'3rem'}>

                                <Box pb={'1.5rem'}>
                                    <Text fontWeight={'bold'}>
                                        Clicks
                                    </Text>
                                </Box>

                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={550} height={250} data={clicksData}
                                               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                        {/*<CartesianGrid strokeDasharray="3 3" />*/}
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Legend/>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8"/>
                                        {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Box>

                    </Box>
                    <Button onClick={statisticsShowToggler} borderRadius={0} w={'100%'} display={'flex'} justifyContent={'center'} p={'1rem'}>
                        <FiChevronUp color={'#25CED1'} size={25}/>
                    </Button>

                </Collapse>

            </Box>

        </Box>
    );
};

export default LearningPathCard;