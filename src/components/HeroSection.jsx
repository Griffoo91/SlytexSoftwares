import video2 from "../assets/video2.mp4";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white">
        {/* Background wrapper */}
        <div className="absolute inset-0 bg-cover bg-black bg-opacity-60 backdrop-blur-lg bg-center bg-fixed backdrop-blur-lg brightness-50 rounded-xl"
             style={{ backgroundImage: "url('/bg2.jpg')" }}>
        </div>

        {/* Content Wrapper (Ensures content is not affected by blur) */}
        <div className="relative z-10 flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                SlytexSoftwares
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                {" "}
                TechSolutions
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
                Your Ultimate partner in innovations and Growth. Get started today and turn your dreams into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md">
                    Read more
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
