import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {}, [userInfo]);

  return (

             
             
    
  <div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">Exercise <span className="text-primary">Tracker</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    
            {userInfo ? (
              <>
                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
                <li className="nav-item">
                  <Link className="nav-link" to='/myexercise'>My Exercise</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {userInfo.name}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" to="/" onClick={logoutHandler}>Logout</Link></li>

                  </ul>
                </li>
              </ul>
              
              </>
            ) : (
              <li className="nav-item ms-auto d-flex mx-3 ">
              <Link className="nav-link btn btn-warning me-3 text-white" to="/login"  >Login</Link>
              <div >
              <Link className="nav-link btn btn-warning text-white" to="/register"  >Register</Link>
              </div>
            </li>
            )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  );
}

export default Header;