import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleShow = () => {
        setShow(!show);
    }


    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            form.reset();
            // console.log(from)
            navigate(from, {replace: true});
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div className='form-container'>
           <h4 className='form-title'>Login</h4> 
           <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="" required />
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type={show ? 'text' : "password" } name="password" id="" required />
                    <p className='toggle' onClick={handleShow}>
                        <small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                        </small>
                    </p>
                    <button type='submit'>
                        Login
                    </button>
                    <p>
                        New to Ema-John?  
                         <span className='refer'>
                             <Link to='/signup'>
                                 Create New Account
                             </Link>
                         </span>
                    </p>
                </div>
           </form>

           {/* <div>
           <hr className="hr-text" data-content="or"/>

                <button className='btn-google'>
                        Continue with Google
                </button>
           </div> */}
        </div>
    );
};

export default Login;