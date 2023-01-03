import React,{useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Button, Container, Row } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './landingpage.css'
import img1 from "../../images/caro1.jpg"
import img2 from "../../images/caro2.jpg"
import img3 from "../../images/caro3.jpg"
const Landingpage = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate=useNavigate()
  // agar user login ha tu redirect hojye dashboard me
  useEffect(() => {
    if (userInfo) {
      navigate("/myexercise");
    }
  }, [navigate, userInfo]);

 
  return (
    <>
    <div className="container-fluid" >
      <div className='row'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Landingpage