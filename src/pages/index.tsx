import {Box} from '@chakra-ui/react'

import HeroSection from "../components/home/HeroSection";
import CategoryAndPathsSection from "../components/home/CategoryAndPathsSection";
import FeaturedTopicsSection from "../components/home/FeaturedTopicsSection";


const Index = () => (
    <Box>
        <HeroSection/>
        <CategoryAndPathsSection/>
        <FeaturedTopicsSection/>
    </Box>
)

export default Index
