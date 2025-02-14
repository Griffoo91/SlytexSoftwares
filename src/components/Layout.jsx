import React from "react";

const Layout = ({ children }) => {
  return (

    <div className="min-h-screen w-full max-w-full bg-cover bg-center bg-no-repeat bg-fixed flex flex-col overflow-hidden" 
         style={{ backgroundImage: "url('/bg2.jpg')" }}>
            <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;