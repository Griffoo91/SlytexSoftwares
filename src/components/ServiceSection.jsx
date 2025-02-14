import { services } from "@/constants";
const ServiceSection = () => {
    return (
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        {/* Background Blur & Dark Overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg"
             style={{ backgroundImage: "url('/bg2.jpg')" }}></div> 
  
        {/* Content Wrapper */}
        <div className="relative z-10 text-center px-6">
          <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-3 py-1 uppercase tracking-wide">
            Services
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
            We easily build
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              {" "}your software solutions
            </span>
          </h2>
        </div>
  
        {/* Services Grid */}
        <div className="relative z-10 flex flex-wrap justify-center mt-12 lg:mt-20 px-6">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-10 border border-neutral-700 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
                {/* Icon */}
                <div className="h-12 w-12 p-3 bg-blue-900 bg-opacity-50 border border-neutral-700 
                               text-blue-400 flex justify-center items-center rounded-full shadow-md">
                  {service.icon}
                </div>
  
                {/* Text Content */}
                <h5 className="mt-4 text-xl font-semibold text-white">{service.text}</h5>
                <p className="text-md text-neutral-300 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceSection;
  