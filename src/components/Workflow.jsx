import { CheckCircle2 } from "lucide-react";
import CodeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="relative mt-20 py-16">
      {/* Background Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg" 
           style={{ backgroundImage: "url('/bg2.jpg')" }}></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide text-white">
          Accelerate your business 
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            {" "}with our solutions.
          </span>
        </h2>
      </div>

      {/* Flex Layout for Image & Checklist */}
      <div className="relative z-10 flex flex-wrap justify-center items-center mt-12 px-6">
        
        {/* Image Section */}
        <div className="p-4 w-full lg:w-1/2 flex justify-center">
          <img 
            src={CodeImg} 
            alt="Code Preview" 
            className="rounded-2xl shadow-lg border border-neutral-700"
          />
        </div>

        {/* Checklist Section */}
        <div className="pt-12 w-full lg:w-1/2 px-6">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-neutral-700 rounded-full h-12 w-12 flex justify-center items-center shadow-md">
                <CheckCircle2 className="text-green-400" />
              </div>
              <div className="ml-4 text-white">
                <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
                <p className="text-md text-neutral-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
