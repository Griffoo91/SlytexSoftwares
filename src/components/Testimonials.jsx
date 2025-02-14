import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="relative mt-20 tracking-wide py-16">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-black bg-cover bg-center bg-fixed brightness-50 backdrop-blur-lg rounded-xl" 
        style={{ backgroundImage: "url('/bg2.jpg')" }} 
      />

      {/* Content Section */}
      <div className="relative z-10 text-white text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
          What people are 
          <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
            {" "} saying
          </span>
        </h2>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center items-center px-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
              <div className="bg-neutral-900 bg-opacity-80 backdrop-blur-md p-6 rounded-lg border border-neutral-700 text-neutral-300 hover:shadow-lg transition-shadow duration-300">
                <p className="italic">"{testimonial.text}"</p>
                <div className="flex mt-6 items-center">
                  <img className="w-12 h-12 mr-4 rounded-full border border-neutral-500" 
                    src={testimonial.image} 
                    alt={testimonial.user} 
                  />
                  <div>
                    <h6 className="font-semibold">{testimonial.user}</h6>
                    <span className="text-sm font-normal text-neutral-500">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
