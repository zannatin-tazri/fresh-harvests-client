import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/firebase.init';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || '/';

  const saveUserToMongoDB = async (user) => {
    try {
      const res = await axiosPublic.get(`/users?email=${user.email}`);
      if (!res.data) {
        const userInfo = {
          name: user.displayName || 'No Name',
          email: user.email,
          cartItems: [],
        };
        await axiosPublic.post('/users', userInfo);
        console.log("✅ User added to MongoDB");
      } else {
        console.log("✅ User already exists in MongoDB");
      }
    } catch (error) {
      console.error("❌ Error saving user to MongoDB:", error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signInUser(email, password);
      const user = result.user;
      await saveUserToMongoDB(user); // <-- add this
      navigate(from, { replace: true });
    } catch (error) {
      console.error("❌ Sign-in error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await saveUserToMongoDB(user); // <-- add this
      navigate(from, { replace: true });
    } catch (error) {
      console.error("❌ Google Sign-in error:", error.message);
    }
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
