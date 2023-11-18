import latestProjectOne from "../assets/images/latest-proj-one.jpg"


const LatestProjects = () => {
    return(
        <div className="px-16 py-4 mt-2">
            <div className="latest-poject-heading">
                <h1 className="font-bold text-4xl text-center">Our Latest Projects</h1>
                <div className="w-1/12 services-span"></div>
                <p className="mt-3 text-xl font-medium text-gray-500 text-center">Our recent projects showcase our dedication to staying at the forefront of industry advancements</p>
                <div className="latest-project-cards flex gap-6 mt-10">
                    <div className="latest-proj-left w-1/3   bg-white pb-8">
                        <div className="latest-proj-img  ">
                        </div>
                        <h1 className="mt-4 text-center font-bold text-lg">
                            Project One
                        </h1>
                        <p className="text-center text-gray-400">This is the first Project</p>
                    </div>
                    <div className="latest-proj-left w-1/3   bg-white pb-8">
                        <div className="latest-proj-img-two  ">
                        </div>
                        <h1 className="mt-4 text-center font-bold text-lg">
                            Project Two
                        </h1>
                        <p className="text-center text-gray-400">This is the second Project</p>
                    </div>
                    <div className="latest-proj-left w-1/3   bg-white pb-8">
                        <div className="latest-proj-img-three  ">   
                        </div>
                        <h1 className="mt-4 text-center font-bold text-lg">
                            Project Three
                        </h1>
                        <p className="text-center text-gray-400">This is the third Project</p>
                    </div>
                </div>
                <div className="latest-proj-btn text-center mt-8">
                    <button className="latest-proj-btn-main">View Our Portfolio →</button>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects;