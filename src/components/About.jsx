import AboutImg from "../assets/images/about-left.jpg"
const About = () => {
    return (
        <div className="border pt-4">
            <div className="about-intro">
                <p className="font-semibold text-gray-600">01. Who we are</p>
            </div>
            <div className="about-content flex justify-between mt-12 gap-16 border">
                <div className="about-content-img border w-7/12">
                    <img src={AboutImg} alt="about landing" />
                </div>
                <div className="about-content-captions border w-5/12 py-10 pl-16">
                    <div className="about-content-caption-inner border">
                        <h1 className="font-bold text-5xl">ACKNOWLEDGED AS ONE OF THE TOP PERFORMERS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About