import React from "react";

const Layout = ({ children }) => {
  return (

    <div className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col" 
         style={{ backgroundImage: "url('/bg2.jpg')" }}>
            <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;