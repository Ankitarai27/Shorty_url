import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-10">
            <Link to="/dashboard" className="text-2xl font-extrabold text-blue-600 tracking-tight">
              URL Shortener
            </Link>
            
            {isAuthenticated && (
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  to="/dashboard" 
                  activeProps={{ className: 'text-blue-600 border-b-2 border-blue-600' }}
                  className="text-gray-600 hover:text-blue-500 py-5 text-sm font-semibold transition-colors"
                >
                  Shorten
                </Link>
                <Link 
                  to="/history" 
                  activeProps={{ className: 'text-blue-600 border-b-2 border-blue-600' }}
                  className="text-gray-600 hover:text-blue-500 py-5 text-sm font-semibold transition-colors"
                >
                  History
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-500">Welcome, {user?.name || 'User'}</span>
                <button
                  onClick={() => dispatch(logout())}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-transform active:scale-95"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/auth" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-all">
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;