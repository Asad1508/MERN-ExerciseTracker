import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/Errormessage";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { login } from "../../actions/userActions";
import pic1 from '../../images/pic3.jpg'
import style from "./Loginscreen.module.css";
import '../../App.css'

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {

      navigate("/myexercise")
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email,password)
    dispatch(login(email, password));
  };

  return (
    <>

      <div className={style.bg}></div>
      <section className={style.fto_section}>
        <div className="container" style={{ position: "absolute", top: "100px", left: "60px" }}>

          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className={style.wrap}>
                <div className="d-md-flex ">
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={pic1} className="d-block w-100" alt="..." />
                      </div>

                    </div>

                  </div>
                  <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Sign In</h3>
                      </div>
                      <div className="w-100">
                        <p className="social-media d-flex justify-content-end">
                          <a href="https://www.facebook.com/" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                          <a href="https://www.twitter.com/" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                        </p>
                      </div>
                    </div>
                    <form action="#" className="signin-form" onSubmit={submitHandler}>
                      <div className="form-group mb-3">
                        <label className="label" >Email</label>
                        <input type="email" className="form-control" placeholder="Email" 
                           required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="label">Password</label>
                        <input type="password" className="form-control" placeholder="Password" 
                           required
                          value={password}

                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        {/* <!-- <button type="submit" className="form-control btn btn-primary rounded signinbtn submit px-3">Sign In</button> --> */}
              <Button  className="form-control btn btn-primary rounded signinbtn submit px-3" type="submit">Sign In</Button>
                      </div>
            
                    
                    </form>
                    {/* <p className="text-center">Not a member?
                      <Link to='register' style={{ textDecoration: 'none', color: "black" }} >
                       Sign Up</Link></p> */}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default LoginScreen;