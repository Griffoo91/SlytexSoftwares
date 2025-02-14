import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useState } from "react";
import BookingFlow from "./bookingflow"; // Import the modal
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate(); // Initializing useNavigate
  const [isBookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="relative mt-20 py-16">
      {/* Background Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg" 
           style={{ backgroundImage: "url('/bg2.jpg')" }}></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide text-white">
          Flexible & Transparent 
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"> Pricing</span>
        </h2>
      </div>

      {/* Pricing Options */}
      <div className="relative z-10 flex flex-wrap justify-center items-center px-6">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="p-10 border border-neutral-700 rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition duration-300">
              {/* Plan Title */}
              <p className="text-4xl font-semibold mb-8 text-white">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              {/* Pricing */}
              <p className="mb-6 text-5xl font-bold text-white">
                {option.price}
                <span className="text-neutral-300 text-xl tracking-tight"> /Month</span>
              </p>

              {/* Features List */}
              <ul className="text-left">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-6 flex items-center text-lg">
                    <CheckCircle2 className="text-green-400" />
                    <span className="ml-3 text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <button
                onClick={() => navigate("/signin")} // Opens sign-in page
                className="mt-12 w-full py-3 px-6 bg-blue-700 hover:bg-blue-900 text-white rounded-lg text-lg font-semibold transition duration-300"
              >
                Subscribe Now
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
