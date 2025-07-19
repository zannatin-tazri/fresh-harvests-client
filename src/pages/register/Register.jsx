import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const confirmPassword = form.confirmPassword.value.trim();

        if (!email || !password || !confirmPassword || !name) {
            setError("All fields are required.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must include uppercase, lowercase, number, and symbol.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const result = await createUser(email, password);
            setSuccess("Account created successfully!");
            form.reset();

            const userInfo = {
                name,
                email,
                
            };

            const res = await axiosPublic.post('/users', userInfo);
            if (res.data.insertedId) {
                console.log("✅ User added to DB");
            }

        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                // Optional: Send user to DB like above
            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-md bg-white shadow-lg p-6 relative">
                <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="label">Full Name</label>
                        <input type="text" name="name" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="input input-bordered w-full" required />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}

                    <button type="submit" className="btn btn-block bg-orange-500 text-white">Register</button>
                </form>

                <div className="divider my-4">OR</div>

                <div className="flex justify-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline w-1/2">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 mr-2" alt="Google" />
                        Google
                    </button>
                </div>

                <p className="text-center mt-4 text-sm">
                    Already have an account? <Link to="/signin" className="text-orange-600 font-semibold">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
