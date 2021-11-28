import React, { useState } from 'react'
// import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';

import { 
    HeroContainer, 
    HeroBg, 
    // VideoBg, 
    HeroContent, 
    // HeroH1, 
    HeroP, 
    Strong,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {

    const [hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
            </HeroBg>
            <HeroContent>
                {/* <HeroH1 to="/ht">BetaBanta</HeroH1> */}
                <HeroP>
                    Challenge your <Strong>friends</Strong> and <Strong>win</Strong> prizes with fun
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true"
                    >
                        Join the Community{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
