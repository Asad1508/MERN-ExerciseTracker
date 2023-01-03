import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/Errormessage";
import { register } from "../../actions/userActions";

// import MainScreen from "../../components/MainScreen";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import styles from "./RegisterScreen.module.css";
import '../../App.css'
function RegisterScreen({ history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

 
  useEffect(() => {
    if (userInfo) {
      Navigate('/')
    }
  }, [Navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));
  };

  return (
    <>
    <div className={styles.bgs}></div>
    {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />} */}
	<div  className={styles.container} >
		<h2 className="text-center text-white">Register</h2>
		<form onSubmit={submitHandler} >
			<div className="form-group">
				<label for="firstname" className="text-white">Full Name</label>
				<input type="text" className="form-control"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}/>
			</div>
			<div className="form-group">
				<label for="Email" className="text-white">Email</label>
				<input type="email" className="form-control"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}/>
			</div>
			<div className="form-group">
				<label for="Password" className="text-white">Password</label>
				<input type="password" className="form-control" 
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}/>
			</div>
			<div className="form-group">
				<label for="Confirmpassword" className="text-white">Confirm Password</label>
				<input type="password" className="form-control" 
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}/>
			</div>
			<div className="form-group">
				<span className="text-white">Registered user ? <a href="" className="text-underline">Login now</a></span>
			</div>
			<button type="submit" className="btn btn-warning w-100 mt-3" name="create">Sign
				up</button>
		</form>
	</div>
     

         
       
       

      </>
  );
}

export default RegisterScreen;