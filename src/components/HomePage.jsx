// import { Link } from "react"
import mainLogo from "../assets/images/moi-full-logo-transformed.png";
import transformed from "../assets/images/moi-full-logo-transformed.png"
import fbLogo from "../assets/images/fb-logo.png";
import twitterLogo from '../assets/images/twitter-logo.png';
import igLogo from "../assets/images/ig-logo.png";
import { Carousel } from 'flowbite-react';


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
                            <div className="w-3/6 border mt-44 pl-20 hero-left-captions">
                                <div className="hero-captions ">
                                    <h5 className="text-green-200 font-bold">INNOVATION REEFINED</h5>
                                    <h1 className="text-white font-bold text-5xl leading-tight"> Explore Excellence <br /> in Engineering <br /> at Moi Chemineer <br /> Limited</h1>
                                </div>
                                <div className="hero-explore">
                                    <button className="hero-btn mt-10">EXPLORE</button>
                                </div>
                            </div>
                        </div>
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                    </Carousel>
                </div>
            </div>       
        </div>
    )
}

export default HomePage