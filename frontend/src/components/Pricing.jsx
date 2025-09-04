import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useState } from "react";

const Pricing = () => {
  const [isBookingOpen, setBookingOpen] = useState(false);

  // Function to handle WhatsApp navigation
  const handleWhatsAppSubscription = (planTitle, planPrice) => {
    const phoneNumber = "+254791947701";
    const message = `Hi! I'm interested in subscribing to the ${planTitle} plan (${planPrice}/Month). Could you please provide more details about the subscription process?`;
    const whatsappUrl = `https://api.whatsapp.com/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative mt-20 py-16">
      {/* Background Blur & Dark Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg"></div>

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

              {/* Subscribe Button - Now opens WhatsApp */}
              <button
                onClick={() => handleWhatsAppSubscription(option.title, option.price)}
                className="mt-12 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Subscribe via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Pricing;