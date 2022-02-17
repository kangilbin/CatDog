import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavigation from './TopNavigation';
import BottomNavigation from "./BottomNavigation";

class AppRouter extends React.Component {
    render() {
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
                <BottomNavigation /> 
            </div>
        );
    }
}
export default AppRouter;
