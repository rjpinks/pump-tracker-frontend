import React, { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";
import NewRecords from "./NewRecords";
import Navbar from "./Navbar";
import Login from "./Login";

function MainComponent() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = function () {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'Profile') {
            return <Profile />
        }
        if (currentPage === 'New Records') {
            return <NewRecords />
        }
        if (currentPage === 'Login') {
            return <Login />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default MainComponent;