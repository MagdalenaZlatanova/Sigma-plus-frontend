import React, {useState} from "react";
import Login from "../components/UI/Auth/Login";
import Register from "../components/UI/Auth/Register";
import Card from "../components/UI/Card/Card";

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <Card>
            <ul className="nav nav-pills nav-justified mb-3">
                <li className="nav-item">
                    <button onClick={() => setIsLogin(true)} className={`nav-link ${isLogin && 'active'}`} data-mdb-toggle="pill">Login</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => setIsLogin(false)} className={`nav-link ${!isLogin && 'active'}`} data-mdb-toggle="pill">Register</button>
                </li>
            </ul>

            {isLogin && <Login />}
            {!isLogin && <Register />}
        </Card>
    )
}

export default Auth;