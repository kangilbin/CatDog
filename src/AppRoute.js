import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './NavigationBar';

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar/>
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
