import React, { useState } from 'react';
// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';
import { Link } from 'react-router-dom';
import Signup from '../../pages/Auth/Signup';
import Login from '../../pages/Auth/Login';

// Main Auth component
const Auth = () => {
    const [mode, setMode] = useState('login');

    const handleLoginSubmit = (data) => {
        // Add your login logic here
        console.log('Login form submitted:', data);
    };

    const handleSignupSubmit = (data) => {
        // Add your signup logic here
        console.log('Signup form submitted:', data);
    };

    const switchMode = () => {
        setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'));
    };

    return (
        <div id='authFont' className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <Link to='/'>
                <img className='items-center mx-auto' src='cnlogo.svg' />
            </Link>
            <p className="mt-4">
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                    className="text-blue-500 hover:underline"
                    onClick={switchMode}
                >
                    {mode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
            </p>
            {/* <h2 className="text-2xl font-bold mb-4">{mode === 'login' ? 'Login' : 'Sign Up'}</h2> */}
            {mode === 'login' ? (
                // <LoginForm onSubmit={handleLoginSubmit} />
                // helo
                <Login />
                // <Login />
            ) : (
                // <SignupForm onSubmit={handleSignupSubmit} />
                // <Sig/nup />
                <Signup />
            )}
        </div>
    );
};

export default Auth;
