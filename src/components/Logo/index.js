import React from 'react';
import Tilt from 'react-parallax-tilt';
import { LogoContainer, TiltLogoContainer, TiltLogo } from './LogoStyling'
import brain from "./brain.png";
const Logo = () => {
    return (

        <LogoContainer>

            <Tilt className="tilt"
                tiltReverse={true}

            >

                <TiltLogoContainer>
                    <TiltLogo> <img alt="logo" src={brain} /> </TiltLogo>
                </TiltLogoContainer>

            </Tilt>

        </LogoContainer>

    )

}

export default Logo

// >