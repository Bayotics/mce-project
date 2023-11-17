// import { Link } from "react"
import mainLogo from "../assets/images/moi-full-logo-transformed.png";
import transformed from "../assets/images/moi-full-logo-transformed.png"
import fbLogo from "../assets/images/fb-logo.png";
import twitterLogo from '../assets/images/twitter-logo.png';
import igLogo from "../assets/images/ig-logo.png";
import { Carousel } from 'flowbite-react';
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import LatestProjects from "../components/LatestProjects";
import Team from "../components/Team";
import OurClients from "../components/ourClients";



const HomePage = () => {
    return (
        <div className="main-banner w-full">
            <div className="hero-main">
                <div className=" main-nav flex px-8">
                        <div className="w-2/6  justify-center pt-4 pl-10">
                            <img className="h-4/6" src = {mainLogo} alt="moi logo"/>
                        </div>
                        <div className="w-4/6 pt-8 ">
                            <div className=" flex ">
                                <div className="flex  text-white font-semibold w-10/12 justify-between">
                                    <div className="nav-item">HOME</div>
                                    <div className="nav-item">ABOUT</div>
                                    <div className="nav-item">PORTFOLIO</div>
                                    <div className="nav-item">SERVICES</div>
                                    <div className="nav-item">CONTACT US</div>
                                </div>
                                <div className="nav-socials  justify-between flex w-2/12 px-4 pt-1">
                                    <div className="facebook-ico">
                                        <img src= {fbLogo} alt="fb nav logo" className="h-4 w-4"/>
                                    </div>
                                    <div className="twitter-ico">
                                        <img src = {twitterLogo} alt="twitter nav logo" className="h-4 w-4"/>
                                    </div>
                                    <div className="instagram-ico">
                                        <img src = {igLogo} alt="instagram nav logo" className="h-4 w-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="main-hero-wrapper">
                    <Carousel>
                        <div className="carousel-container-one">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold">INNOVATION REDEFINED</h5>
                                    <h1 className="text-white font-bold text-5xl leading-normal mt-4"> Explore Excellence in Engineering at Moi Chemineer Limited</h1>
                                    <p className="mt-8 text-white text-xl">We provide a range of sectors throughout Africa with sustainable solutions and services. Because of the calibre of our services, our clients and partners respect us.</p>
                                </div>
                                <div className="hero-explore ">
                                    <button className="hero-btn mt-10">EXPLORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-container-two">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold">UNPARALLELED EXPERTISE</h5>
                                    <h1 className="text-white font-bold text-5xl leading-tight mt-4"> Unleashing Engineering brilliance for a sustainable tomorrow</h1>
                                    <p className="mt-8 text-white text-xl">We are committed to making a world class difference in Engineering, Construction, Plant design and development. </p>
                                </div>
                                <div className="hero-explore">
                                    <button className="hero-btn mt-10">EXPLORE</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-container-three">
                            <div className="w-4/6 mt-48 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold">ENGINEERING EXCELLENCE</h5>
                                    <h1 className="text-white font-bold text-5xl leading-tight mt-4"> Moi Chemineer is where Ingenuity meets Innovation</h1>
                                    <p className="mt-8 text-white text-xl">We provide a range of sectors throughout Africa with sustainable solutions and services. Because of the calibre of our services, our clients and partners respect us.</p>
                                </div>
                                <div className="hero-explore">
                                    <button className="hero-btn mt-10">EXPLORE</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div> 
            <div className="about-landing px-8 py-4 border">
                <About />
            </div> 
            <div className="services-landing border px-8 py-4">
                <Services />
            </div>            
            <div className="whyUs-landing border px-8 py-4">
                <WhyUs />
            </div>   
            <div className="latest-project-landing border py-12">
                <LatestProjects />
            </div>   
            <div className="team-landing border py-12">
                <Team />
            </div>
            <div className="ourClients-landing border py-12">
                <OurClients />
            </div>
        </div>
    )
}

export default HomePage