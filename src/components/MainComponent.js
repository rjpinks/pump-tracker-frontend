import React, { useState } from "react";

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