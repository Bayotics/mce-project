import employees from "../assets/images/pngs/employees.png"
import maxPower from "../assets/images/pngs/maxPower.png"
import chemical from "../assets/images/pngs/chemical.png"

const WhyUs = () => {
    return(
        <div className="why-us-main border px-16 py-4">
            <div className="whyus-caption text-center border">
                <h1 className="text-3xl font-bold">We Supply Energy</h1>
                <div className="w-1/12 services-span"></div>
                <p className="mt-4 text-gray-500 text-lg font-medium">To Numerous Customers, including Government Buildings, Residences, and Offices</p>
            </div>
            <div className="flex whyus-upper border">
                <div className="whyus-item border w-1/4">
                    <div className="why-us-img-main border">
                        <img className="why-us-img" src = {employees} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8">
                        <h1 className=" font-medium">Dedicated Personnel</h1>
                        <p className="text-sm mt-2 text-gray-600">Together, we create a dynamic work environment where creativity thrives, ideas flourish, and challenges are met with enthusiasm</p>
                    </div>
                </div>
                <div className="whyus-item border w-1/4">
                    <div className="why-us-img-main border">
                        <img className="why-us-img" src = {maxPower} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8">
                        <h1 className=" font-medium">Dedicated Personnel</h1>
                        <p className="text-sm mt-2 text-gray-600">Together, we create a dynamic work environment where creativity thrives, ideas flourish, and challenges are met with enthusiasm</p>
                    </div> 
                </div>
                <div className="whyus-item border w-1/4">
                    <div className="why-us-img-main border">
                        <img className="why-us-img" src = {chemical} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8">
                        <h1 className=" font-medium">Dedicated Personnel</h1>
                        <p className="text-sm mt-2 text-gray-600">Together, we create a dynamic work environment where creativity thrives, ideas flourish, and challenges are met with enthusiasm</p>
                    </div>  
                </div>
                <div className="whyus-item border w-1/4">
                    <div className="why-us-img-main border">
                        <img className="why-us-img" src = {employees} alt="employees"/>
                    </div>
                    <div className="whyus-item-captions text-center mt-8">
                        <h1 className=" font-medium">Dedicated Personnel</h1>
                        <p className="text-sm mt-2 text-gray-600">Together, we create a dynamic work environment where creativity thrives, ideas flourish, and challenges are met with enthusiasm</p>
                    </div>
                </div>
            </div>
            <div className="flex whyus-lower border">

            </div>
        </div>
    )
}

export default WhyUs    