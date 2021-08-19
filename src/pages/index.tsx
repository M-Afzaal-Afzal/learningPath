import {Box} from '@chakra-ui/react'

import HeroSection from "../components/home/HeroSection";
import CategoryAndPathsSection from "../components/home/CategoryAndPathsSection";
import FeaturedTopicsSection from "../components/home/FeaturedTopicsSection";
import CreateLearningPathCta from "../components/home/CreateLearningPathCta";


const Index = () => (
    <Box>
        <HeroSection/>
        <CategoryAndPathsSection/>
        <FeaturedTopicsSection/>
        <CreateLearningPathCta/>
    </Box>
)

export default Index
