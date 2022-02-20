import React from 'react';
import Container from "../../../Styles/container";
import Button from "@mui/material/Button";
import LandingWrapper from "./LandingWrapper";
import {BsPlay} from "react-icons/bs";

function Landing(props) {
    return (
        <Container className={"mx-auto"}>
                <LandingWrapper>
                   <section id="first"   className={"flex justify-center items-center "}>
                       <div className={"flex justify-between items-center "}>
                           <div className={"md:w-full lg:w-4/12 "}>
                               <span className={"text-orange-600"}>DIGITAL MARKETING</span>
                               <h1 className={"text-6xl my-12 font-bold" }>Boosts Your Website Traffic</h1>
                               <p className={"text-gray-600 mb-12"}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</p>
                               <div className="buttons flex">
                                   <Button variant="contained">Try For Free</Button>
                                   <Button variant="outlined" className={"flex gap-3"}><BsPlay /><span> See Our Work</span></Button>
                               </div>
                           </div>
                           <div className={"md:w-full lg:w-6/12 "}>
                               <img src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_market.svg" alt=""/>
                           </div>
                       </div>
                   </section>
                    <section id="second">
                        <div className="text-center  w-full">
                            <h1 className={"text-5xl font-bold "}>Our Clients</h1>
                            <div className="mx-auto lg:w-6/12">
                                <div className="lg:w-full flex justify-around my-7">
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/airbnb.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/dropbox.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/facebook.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/google.svg" alt=""/>
                                </div>
                                <div className="lg:w-full flex justify-around my-7">
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/heroku.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/lenovo.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/microsoft.svg" alt=""/>
                                    <img src="https://zone-assets-api.vercel.app/assets/logos/netflix.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="third">
                        <div className="imgBig ">
                            <img className={"mx-auto"} src="https://zone-assets-api.vercel.app/assets/images/marketing/marketing_langding_about.jpg" alt=""/>
                        </div>
                    </section>
                    <section id="fourth">
                        <div className="flex justify-between">
                            <div className="lg:w-5/12">
                                <span>ABOUT US</span>
                                <h1>Who We Are</h1>
                                <p>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <button variant={"outlined"}>Learn More </button>
                            </div>
                            <div className="lg:w-6/12">
                                <div className="projects flex items-center">
                                    <div className="lg:4/12">
                                        <h1><span>150</span></h1>
                                        <p>PROJECTS</p>
                                    </div>
                                    <div className="lg:w-8/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                                <div className="happyClients flex items-center">
                                    <div className="lg:4/12">
                                        <h1><span>32k</span></h1>
                                        <p>HAPPY CLIENTS</p>
                                    </div>
                                    <div className="lg:w-8/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                                <div className="expreins flex items-center">
                                    <div className="lg:4/12">
                                        <h1><span>20</span></h1>
                                        <p>YEARS OF EXPERIENCE</p>
                                    </div>
                                    <div className="lg:w-8/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </LandingWrapper>
        </Container>
    );
}

export default Landing;