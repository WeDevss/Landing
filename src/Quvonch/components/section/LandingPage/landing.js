import React, {useState} from 'react';
import Container from "../../../Styles/container";
import Button from "@mui/material/Button";
import LandingWrapper from "./LandingWrapper";
import {BsArrowRight, BsPlay} from "react-icons/bs";
import {BiPlusMedical} from "react-icons/bi";
import ActionAreaCard from "../../card/card";
import img1 from "../../../images/icon1.png";
import img2 from "../../../images/icon2.png";
import img3 from "../../../images/icon3.png";
import img4 from "../../../images/icon4.png";
import icon1 from "../../../images/img1.png";
import icon2 from "../../../images/img2.png";
import icon3 from "../../../images/img3.png";
import icon4 from "../../../images/img4.png";
import ActionAreaCardSmall from "../../card/smallCard";




function Landing(props) {
    const [cardInfo,setCardInfo] = useState([
        {
            imgUrl: img1,
            name: 'SEO',
        },
        {
            imgUrl: img2,
            name: 'Email Marketing',
        },
        {
            imgUrl: img3,
            name: 'Search Engine Oprimization',
        },
        {
            imgUrl: img4,
            name: 'Social Marketing',
        },
    ]);
    const [card2Info,setCard2Info] = useState([
        {
            imgUrl: icon1,
            name: 'SEO',
            style:{
                transform:'translateY(90px)',
                color: '#770508',
                background:'#FDAB76',
            },
            bottomText: 'Planning',
        },
        {
            imgUrl: icon2,
            name: 'Email Marketing',
            style:{
                transform:'translateY(60px)',
                color: '#063963',
                background:'#77F0ED',
            },
            bottomText: 'Research',

        },
        {
            imgUrl: icon3,
            name: 'Search Engine Oprimization',
            style:{
                transform:'translateY(30px)',
                color: '#7A5204',
                background:'#FFE475',
            },
            bottomText: 'Optimizing',

        },
        {
            imgUrl: icon4,
            name: 'Social Marketing',
            style:{
                transform:'translateY(0)',
                color: '#086F5E',
                background:'#62F290',
            },
            bottomText: 'Results',

        },
    ]);
    return (
        <Container className={"mx-auto"}>
                <LandingWrapper>
                   <section id="first"   className={"flex justify-center items-center "}>
                       <div className={"flex justify-between items-center "}>
                           <div className={"xs:w-full lg:w-4/12  "}>
                               <span className={"text-orange-600"}>DIGITAL MARKETING</span>
                               <h1 className={"text-6xl my-12 font-bold" }>Boosts Your Website Traffic</h1>
                               <p className={"text-gray-600 mb-12"}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.</p>
                               <div className="buttons flex justify-center">
                                   <Button variant="contained">Try For Free</Button>
                                   <Button variant="outlined" className={"flex gap-3"}><BsPlay /><span> See Our Work</span></Button>
                               </div>
                           </div>
                           <div className={"md:display-none lg:w-6/12 "}>
                               <img src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_market.svg" alt=""/>
                           </div>
                       </div>
                   </section>
                    <section id="second">
                        <div className="text-center  w-full">
                            <h1 className={"text-5xl font-bold "}>Our Clients</h1>
                            <div className="mx-auto lg:w-6/12">
                                <div className="w-full flex gap-5 justify-around my-7">
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/airbnb.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/dropbox.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/facebook.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/google.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/heroku.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/lenovo.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/microsoft.svg" alt=""/>
                                    <img className={"xs:w-full md:w-4/12 lg:w-3/2"} src="https://zone-assets-api.vercel.app/assets/logos/netflix.svg" alt=""/>
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
                            <div className="lg:w-5/12 my-20 text-right">
                                <span className={"font-medium"}>ABOUT US</span>
                                <h1 className={""}>Who We Are</h1>
                                <p className={"mb-8"}>In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                <Button  variant="outlined" className="flex items-center"><span>Learn More</span> <BsArrowRight /></Button>
                            </div>
                            <div className="lg:w-6/12  my-20">
                                <div className="projects flex items-center">
                                    <div className="lg:3/12  mr-6 px-8">
                                        <h1 className={"flex"}><span>150</span><BiPlusMedical /></h1>
                                        <p >PROJECTS</p>
                                    </div>
                                    <div className="lg:w-9/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                                <div className="happyClients flex items-center">
                                    <div className="lg:3/12 px-8">
                                        <h1 className={"flex"}><span>32k</span><BiPlusMedical /></h1>
                                        <p >HAPPY CLIENTS</p>
                                    </div>
                                    <div className="lg:w-9/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                                <div className="expreins flex items-center">
                                    <div className="lg:3/12 px-8">
                                        <h1 className={"flex"}><span>20</span><BiPlusMedical /></h1>
                                        <p >YEARS OF EXPERIENCE</p>
                                    </div>
                                    <div className="lg:w-9/12">
                                        <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="fifth">
                        <p className={"par1"}>OUR SERVICES</p>
                        <h1 className={"text-5xl font-bold my-12"}>We Provide</h1>
                        <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                        <div className="cards w-full flex gap-8 my-12">
                            {
                                cardInfo.map((item,index)=>{
                                   return(
                                    <div key={index} className="lg:w-3/12">
                                        <ActionAreaCard {...item} />
                                    </div>
                                )
                                })
                            }


                        </div>
                    </section>
                    <section id="sixth">
                        <p className={"par1"}>WORK FLOW</p>
                        <h1 className={"text-5xl font-bold my-12"}>Working Process</h1>
                        <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</p>
                        <div className="cards w-full flex gap-8 my-12">
                            {
                                card2Info.map((item,index)=>{
                                    return(
                                        <div key={index} className="lg:w-3/12">
                                            <ActionAreaCardSmall {...item} />
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </section>
                    <section id="seventh">
                        <p className={"par1"}>OUR WORK</p>
                        <h1 className={"text-5xl font-bold my-12"}>Case Studies</h1>
                        <div className="cards w-full flex gap-8 my-12 justify-center items-center">
                            <div className="left">
                                <div className="img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNSSUrCm8myyCffaaBCxBeEay33Dwjgkneg&usqp=CAU" alt=""/>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="top flex my-6">
                                    <div className="boxs">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNSSUrCm8myyCffaaBCxBeEay33Dwjgkneg&usqp=CAU" alt=""/>
                                        <div className="info">
                                            <span>MARKETING</span>
                                            <h4>Digital Shose</h4>
                                            <p>Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue.</p>
                                            <Button variant="outlined"><span>Learn More</span> <BsArrowRight /></Button>

                                        </div>
                                    </div>
                                </div>
                                <div className="bottom flexmy-6">
                                    <div className="boxs">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNSSUrCm8myyCffaaBCxBeEay33Dwjgkneg&usqp=CAU" alt=""/>
                                        <div className="info">
                                            <span>MARKETING</span>
                                            <h4>Digital Shose</h4>
                                            <p>Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue.</p>
                                            <Button variant="outlined"><span>Learn More</span> <BsArrowRight /></Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNSSUrCm8myyCffaaBCxBeEay33Dwjgkneg&usqp=CAU" alt=""/>
                                </div>
                            </div>


                        </div>
                    </section>
                </LandingWrapper>
        </Container>
    );
}

export default Landing;