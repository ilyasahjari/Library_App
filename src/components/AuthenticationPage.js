import React, { useState } from 'react';
import "./../Authenticationstyle.css"
import { AtomSpinner } from 'react-epic-spinners';


const AuthentificationPage = (props) => {

    const [stateLogin, setStateLogin] = useState({
        userName: "",
        password: ""
    })

    const onStateLoginChange = (e) => {
        setStateLogin({ ...stateLogin, [e.target.name]: e.target.value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        (stateLogin.userName === "admin" && stateLogin.password === "admin") ? props.connect(true) : alert("Nom ou mot de passe incorrect");
    }

    return (
        <div>
            <header >

                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#398B93" }}>
                    <AtomSpinner color='black' size={40} />

                    <a className="navbar-brand" style={{ backgroundColor: "#398B93" }} > LIBRARY APP</a>
                </nav>
            </header>

            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first" >
                        <img src={require("../images/logo.png")} style={{ height: "60px" }} />
                    </div>

                    <form>
                        <input type="text" style={{ width: "80%" }} onChange={onStateLoginChange} autoComplete="off" id="login" className="fadeIn second" name="userName" placeholder="login" /><br />
                        <input type="password" style={{ width: "80%" }} onChange={onStateLoginChange} autoComplete="off" id="password" className="fadeIn third" name="password" placeholder="password" />
                        <input type="submit" onClick={handleLogin} className="fadeIn fourth" value="Log In" />
                    </form>
                login : admin<br />
                password : admin
                <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthentificationPage;