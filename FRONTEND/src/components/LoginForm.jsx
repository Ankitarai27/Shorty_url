import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('xyz@gmail.com');
    const [password, setPassword] = useState('password123');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        setLoading(true);
        setError('');

        try {
            // Use your API helper which already uses axiosInstance
            const data = await loginUser(password, email); 
            
            // Sync with Redux and navigate to the dashboard
            dispatch(login(data.user));
            navigate({ to: "/dashboard" });
        } catch (err) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full max-w-md mx-auto">
           <div className="bg-white shadow-lg rounded-none px-10 pt-8 pb-10 mb-4 border border-gray-100">
                <h2 className="text-3xl font-extrabold text-center mb-8 text-slate-800 tracking-tight">Login</h2>
                {error && (
                    <div className="mb-6 p-3 bg-red-50 text-red-600 border-l-4 border-red-600 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6">
                    <label className="block text-slate-600 text-xs uppercase tracking-widest font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="appearance-none border-b-2 border-slate-200 rounded-none w-full py-3 px-1 text-slate-700 leading-tight focus:outline-none focus:border-blue-600 transition-colors duration-300"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-10">
                    <label className="block text-slate-600 text-xs uppercase tracking-widest font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border-b-2 border-slate-200 rounded-none w-full py-3 px-1 text-slate-700 leading-tight focus:outline-none focus:border-blue-600 transition-colors duration-300"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className={`bg-blue-600 text-white font-bold py-4 px-4 rounded-none w-full tracking-widest uppercase text-sm shadow-md active:bg-blue-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </div>

                <div className="text-center mt-6">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">
                        Don't have an account? <span onClick={() => state(false)} className="text-blue-600 cursor-pointer font-bold border-b border-blue-600 ml-1">Register</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;