import React, {useState} from "react";
import useHttp from "../../../hooks/http-hook";
import {useUser} from "../../../store/user-context";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {error, isLoading, login} = useHttp();
    const {setData} = useUser();
    const navigate = useNavigate();

    const changeUsernameHandler = (event) => {
        setErrorMessage('')
        setEnteredUsername(event.target.value)
    }

    const changePasswordHandler = (event) => {
        setErrorMessage('')
        setEnteredPassword(event.target.value)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (enteredUsername === '' || enteredPassword === '') {
            setErrorMessage('Enter values in all fields')
            return;
        }

        setErrorMessage('');

        const data = await login(enteredUsername, enteredPassword);

        if (data === null)
            return;

        setData(data);
        navigate('/')
    }

    return (
        <div className="tab-content">
            <div className="tab-pane fade show active">
                <form onSubmit={submitHandler}>

                    <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control" value={enteredUsername} onChange={changeUsernameHandler}/>
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" value={enteredPassword} onChange={changePasswordHandler}/>
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4" disabled={isLoading}>Sign in</button>
                    {errorMessage !== '' && <p className="text-danger">{errorMessage}</p>}
                    {error && <p className="text-danger">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login