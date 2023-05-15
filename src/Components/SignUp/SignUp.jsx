import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const password2 = form.password2.value;
        console.log(email, password, password2);

        if(password !== password2) {
            setError('Passwords do not match');
            return;
        }
        else if(password.length < 8 || password2.length < 8){
            setError('Your Password is lower than 8 characters');
            return;
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(err => {
            setError(err.message);
            console.log(err.message);
        });
    }

    return (
        <div className='form-container'>
           <h4 className='form-title'>Sign Up</h4> 
           <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="" required />
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="" required />
                    <label htmlFor="password2">
                        Confirm Password
                    </label>
                    <input type="password" name="password2" id="" required />
                    <button type='submit'>
                        Sign Up
                    </button>
                    <p>
                        Already have an account?  
                         <span className='refer'>
                             <Link to='/login'>
                                 Login
                             </Link>
                         </span>
                    </p>
                </div>
           </form>


           {/* <div>
           <hr class="hr-text" data-content="or"/>

                <button className='btn-google'>
                        Continue with Google
                </button>
           </div> */}
           <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;