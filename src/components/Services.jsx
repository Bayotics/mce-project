import design from "../assets/images/services-design.jpeg";
import construction from "../assets/images/services-construction.jpg";
import process from "../assets/images/services-process.jpeg"
import maintenance from "../assets/images/services-maintenance.jpg";

const Services = () => {
    return (
        <div className="border pt-4">
            <div className="services-intro">
                <p className="font-semibold text-gray-600">02. What we do</p>
            </div>
            <div className="px-16 mt-8 services-landing-main border">
                <h1 className="text-center">*********</h1>
                <div className="services-landing-innner mt-8 gap-8 flex border">
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {design} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">ENGINEERING DESIGN</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                        </div>
                    </div>
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {construction} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">ENGINEERING CONSTRUCTION</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">From groundbreaking to project completion, we seamlessly integrate design concepts into the construction process, emphasizing efficiency, safety, and sustainability. </p>
                        </div>
                    </div>
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {process} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">PROCESS ENGINEERING</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                        </div>
                    </div>
                </div>
                <div className="services-landing-innner mt-12 gap-8 flex">
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {maintenance} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">MAINTENANCE</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">We employ a strategic, data-driven approach to maintenance, leveraging advanced diagnostics and predictive analytics to identify potential issues before they escalate. </p>
                        </div>
                    </div>
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {design} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">ENGINEERING DESIGN</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                        </div>
                    </div>
                    <div className="w-1/3 border rounded-lg pb-4">
                        <div className="services-img-upper">
                            <img src= {design} alt="design" className="h-56 w-full" />
                        </div>
                        <div className="services-captions px-4">
                            <h1 className="text-center mt-8 font-bold text-lg">PROCESS ENGINEERING</h1>
                            <div className="w-2/12 services-span"></div>
                            <p className="mt-4 text-center">Our experienced team of engineers employs state-of-the-art tools and methodologies to conceptualize and develop designs that not only meet but exceed client expectations. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services