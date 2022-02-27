import React from "react";
import App from "./App";
import Youtube from "./Youtube";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from './TopNavigation';
import BottomNavigation from "./BottomNavigation";
import { isMobile } from "react-device-detect";


const AppRouter = () => {
    if(isMobile){
        return (
        <div>
            <TopNavigation/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/youtube" element={<Youtube />} />
                    </Routes>
                </div>
                <BottomNavigation /> 
            </Router>
        </div>
        );
    }
    return (
        <div>
            <TopNavigation/>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/youtube" element={<Youtube />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default AppRouter;
