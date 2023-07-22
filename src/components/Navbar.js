import React from "react";

function Navbar({currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a 
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                            aria-current="page" 
                            href="home"
                        >
                            Home
                        </a>
                        <a 
                            onClick={() => handlePageChange('Profile')}
                            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                            href="profile">
                                Profile
                        </a>
                        <a 
                            onClick={() => handlePageChange('New Records')}
                            className={currentPage === 'New Records' ? 'nav-link active' : 'nav-link'} 
                            href="new-records"
                        >
                            New Records
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
