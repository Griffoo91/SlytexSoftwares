import React from "react";


const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden ">
      {/* Background image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-no-repeat bg-top bg-auto bg-fixed fade-in transition-all duration-1000 z-0"
        style={{
          backgroundImage: "url('/backgroundcofee.webp')", 
        }}
        aria-hidden="true"
      />


      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;