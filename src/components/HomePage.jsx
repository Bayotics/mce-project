// import { Link } from "react"
import mainLogo from "../assets/images/moi-full-logo-transformed.png";
import fbLogo from "../assets/images/fb-logo.png";
import twitterLogo from '../assets/images/twitter-logo.png';
import igLogo from "../assets/images/ig-logo.png";


const HomePage = () => {
    return (
        <div className="main-banner w-full border">
            <div className="hero-main">
                <div className="border main-nav flex px-8">
                        <div className="w-2/6 border justify-center pt-4 pl-10">
                            <img className="h-4/6" src = {mainLogo} alt="moi logo"/>
                        </div>
                        <div className="w-4/6 py-4 border">
                            <div className="border flex ">
                                <div className="flex border w-10/12 justify-between">
                                    <div className="nav-item">HOME</div>
                                    <div className="nav-item">ABOUT</div>
                                    <div className="nav-item">PORTFOLIO</div>
                                    <div className="nav-item">SERVICES</div>
                                    <div className="nav-item">CONTACT US</div>
                                </div>
                                <div className="nav-socials border flex w-2/12">
                                    <div className="facebook-ico">f</div>
                                    <div className="instagram-ico">i</div>
                                    <div className="twitter-ico">t</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>       
        </div>
    )
}

export default HomePage