import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log('Sign In', result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log('Google Sign In', result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Google Sign In Error:', error.message);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-md bg-white shadow-lg p-6 relative">
                <button className="absolute right-4 top-4 text-gray-400 text-xl">&times;</button>
                <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <label className="label">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                    </div>
                    <button type="submit" className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white mt-2">Sign In</button>
                </form>

                <div className="divider my-4">Or Sign In with</div>

                <div className="flex justify-center mb-4">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full flex justify-center">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 mr-2" alt="Google" />
                        Google
                    </button>
                </div>

                <p className="text-center text-sm mt-4">
                    Don't have an account? <Link to="/register" className="text-orange-600 font-semibold">Sign Up</Link>
                </p>
            </div>

            
        </div>
    );
};

export default SignIn;
