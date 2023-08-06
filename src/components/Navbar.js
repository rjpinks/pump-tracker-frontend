import React from "react";

function Navbar({ currentPage, handlePageChange }) {
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
                            href="#"
                        >
                            Home
                        </a>
                        <a 
                            onClick={() => handlePageChange('Profile')}
                            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                            href="#"
                            >
                                Profile
                        </a>
                        <a 
                            onClick={() => handlePageChange('New Records')}
                            className={currentPage === 'New Records' ? 'nav-link active' : 'nav-link'} 
                            href="#"
                        >
                            New Records
                        </a>
                        <a 
                            onClick={() => handlePageChange('Login')}
                            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'} 
                            href="#"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
