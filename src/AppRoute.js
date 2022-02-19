import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from './TopNavigation';
import BottomNavigation from "./BottomNavigation";
import { isMobile } from "react-device-detect";
class AppRouter extends React.Component {
    render() {
            
        if(isMobile){
            return (
            <div>
                <TopNavigation/>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/" element={<App />} />
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
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
export default AppRouter;
