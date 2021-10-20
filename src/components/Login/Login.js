import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import Header from '../Header/Header';


function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }



    return (
        <div>
            <Header></Header>
            <div className="container col-md-5 mt-5">
                <div style={{ border: '1px solid gray', padding: '15px' }}>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                    <label htmlFor="newUser">New User? Sign up first...</label>
                    <form onSubmit={handleSubmit}>
                        {newUser && <input className="form-control" name="name" type="text" onBlur={handleBlur} placeholder="Your name" />}
                        <br />
                        <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
                        <br />
                        <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
                        <br />
                        <input className="form-control btn btn-primary" type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
                    </form>
                    <div style={{ textAlign: 'center' }}>
                        <br />
                        <p>Or</p>
                        {user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
                            <button className='form-control btn btn-danger' onClick={googleSignIn}>Sign In With Google</button>
                        }
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;