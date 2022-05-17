import { Link, useLocation } from 'react-router-dom'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import Login from './Login';
import Register from './Register';

export default function Navbar() {
    let loco= useLocation()
    
    const data= useSelector((state)=>state.cartItems) 

  
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-light" to="/">StoreMore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold  ${loco.pathname==="/"?" text-light":""}`} aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${loco.pathname==="/products"?" text-info ":""}`} aria-current="page" to="/products">PRODUCTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${loco.pathname==="/about"?" text-info":""}`} aria-current="page" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold ${loco.pathname==="/contact"?" text-info":""}`} aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                        <div className="buttons d-flex ">
                          <Login/>
                           <Register/>
                           
                            <Link className={`${loco.pathname==="/cart"?"text-danger active":"text-light"}  fw-bold  me-4`} to="/cart" >
                                <Badge badgeContent={data.carts.length} color="primary">
                                    < ShoppingBagIcon  fontSize="large" />
                                </Badge>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
