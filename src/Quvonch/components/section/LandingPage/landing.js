import React from 'react';
import Container from "../../../Styles/container";
import Button from "@mui/material/Button";
import LandingWrapper from "./LandingWrapper";

function Landing(props) {
    return (
        <Container className={"mx-auto"}>
                <LandingWrapper>
                    <div className={"flex justify-center items-center"}>
                        <div className={"lg:w-1/2 md:w-full"}>
                            <span>DIGITAL MARKETING</span>
                            <h1>Boosts Your Website Traffic</h1>
                            <p>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</p>
                            <div className="buttons">
                                <Button variant="contained">Try For Free</Button>
                            </div>
                        </div>
                        <div className={"lg:w-1/2 md:w-full"}>
                            <img src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_market.svg" alt=""/>
                        </div>
                    </div>
                </LandingWrapper>
        </Container>
    );
}

export default Landing;