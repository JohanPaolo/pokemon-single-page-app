import { Link, NavLink, useNavigate } from 'react-router-dom';
import React from 'react';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('./login',{
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Pokemon
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">


                
                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive? 'active':''}`}
                        to="/pokedex"
                    >
                        Pokedex
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive? 'active':''}`} 
                        to="/searchId"
                    >
                        Search by Id
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive? 'active':''}`} 
                        to="/searchName"
                    >
                        Search by name
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive? 'active':''}`} 
                        to="/searchType"
                    >
                        Search by type
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        User
                    </span>
                    <button
                        className='nav-item nav-item btn text-white'
                        onClick={onLogout}>
                            Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}