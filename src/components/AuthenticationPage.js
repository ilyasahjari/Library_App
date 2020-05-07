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
               <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />   
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"/>

            <header >

                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#398B93" }}>
                    <AtomSpinner color='black' size={40} />

                    <a className="navbar-brand" style={{ backgroundColor: "#398B93" }} > LIBRARY APP</a>
                </nav>
                <h1 className="testTilte">  <img src={require("../images/logo.png")} style={{ height: "60px" }} /> LIBRARY APP</h1>
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