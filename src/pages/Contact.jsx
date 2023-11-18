

const Contact = () => {
    return(
        <div className="contact-page-main">
            <div className="main-contact-hero">
                <div className="contact-heading-main text-center mt-48">
                    <h1 className="font-bold text-5xl text-center text-white">Contact Us</h1>
                </div>
            </div> 
            <div className="services-page-content px-12">
                <h1 className="font-bold text-4xl text-center">Get in Touch</h1>
                <div className="w-1/12 services-span"></div>
                <p className="font-semibold text-lg  mt-4 text-center">You can get in touch with us, our support will available to respond to you 8am-7pm Monday to Saturday.</p>
            </div>
            <div className="services-input px-12 mt-8">
                <div className="top-input flex gap-8">
                    <input type="text" className="w-1/3 pl-4 rounded-sm" placeholder="Your Name"></input>
                    <input type = "tel" className="w-1/3 pl-4 rounded-sm" placeholder="Your Phone Number"></input>
                    <input type="email" className="w-1/3 pl-4 rounded-sm" placeholder="Subject"></input>
                </div>
                <div className="bottom-input mt-12">
                    <textarea className="w-full h-64 rounded-sm" placeholder="Input your message"></textarea>
                </div>
                <div className="latest-proj-btn text-center mt-8">
                    <button className="latest-proj-btn-main">Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default Contact