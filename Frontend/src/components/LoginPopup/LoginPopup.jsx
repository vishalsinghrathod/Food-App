import React, { useState, useContext } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const LoginPopup = () => {

  const { setShowLogin, setUser } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prev => ({ ...prev, [name]: value }));
  }

  const handleStateChange = (state) => {
    setCurrState(state);
    setData({
      name: "",
      email: "",
      password: ""
    });
  }

  const onLogin = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (currState === "Sign Up") {
      const userExists = users.some(u => u.email === data.email);
      if (userExists) {
        alert("Email already registered! Please login.");
        handleStateChange("Login");
        return;
      }

      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup successful! Please login to continue.");
      handleStateChange("Login");
    } else {
      const existingUser = users.find(u => u.email === data.email);

      if (!existingUser) {
        alert("No account found. Please sign up first!");
        handleStateChange("Sign Up");
        return;
      }

      if (existingUser.password !== data.password) {
        alert("Incorrect password! Please try again.");
        return;
      }

      setUser({ name: existingUser.name, email: existingUser.email });
      localStorage.setItem("loggedInUser", JSON.stringify({ name: existingUser.name, email: existingUser.email }));
      setShowLogin(false);
      alert(`Welcome back, ${existingUser.name}!`);
    }
  }

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Login" ? <></> : <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required  />
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
            </div>
            <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login"
            ?<p>Create a new account? <span onClick={() => handleStateChange("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={() => handleStateChange("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup;