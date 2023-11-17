import { Carousel } from 'flowbite-react';


const OurClients = () => {
    return(
        <div className="testimonials-main px-6 py-4">
            <div className="testimonials-heading">
                <h1 className="font-bold text-4xl text-center text-white">Testimonials</h1>
                <div className="w-1/12 testimonials-span"></div>
            <p className="mt-3 text-xl font-medium text-white text-center">Here is what some of our clients say about us</p>
            </div>
            <div className='testimonial-carousel border mt-10 px-8'>
                <Carousel>
                    <div className='testimonial-carousel-one'>
                        <div className='test-one border'>
                            <div className='testimonial-pic'>
                                {/* ❝ */}
                                
                            </div>
                        </div>
                        <h1 className='text-white'>Abc</h1>
                    </div>
                    {/* <div className='testimonial-carousel-one'>
                        b
                    </div>
                    <div className='testimonial-carousel-one'>
                        c
                    </div> */}
                </Carousel>
            </div>
        </div>
    )
}

export default OurClients