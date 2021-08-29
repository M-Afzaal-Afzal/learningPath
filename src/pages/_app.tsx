import {ChakraProvider} from '@chakra-ui/react'

import theme from '../theme'
import {AppProps} from 'next/app'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import '../styles/gloabal.css'
import '../styles/swiper.css'
import 'rc-rate/assets/index.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </ChakraProvider>
    )
}

export default MyApp
