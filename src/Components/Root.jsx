import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "../Footer";
import { createContext, useState } from "react";

export const navRenderContext = createContext(0);


const Root = () => {
    const [navrender, setNevrender] = useState(0)

    return (
        <div className="container mx-auto">
            
                <navRenderContext.Provider value={setNevrender}>
                <Navber></Navber>
                   <div className="min-h-[calc(100vh-232px)]">
                   <Outlet setNevrender={setNevrender} ></Outlet>
                   </div>
            <Footer></Footer>
                </navRenderContext.Provider>
           
        </div>
    );
};

export default Root;