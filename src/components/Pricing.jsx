import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useState } from "react";
import BookingFlow from "./bookingflow"; // Import the modal
import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const navigate = useNavigate(); //Initializing the useNavigate method
  const [isBookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2 text-neutral-500">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Change <a> to <button> and add onClick */}
              <button
                onClick={() => navigate("/signIn") } //setBookingOpen(true)
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* BookingFlow Modal */}
      <BookingFlow isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Pricing;
