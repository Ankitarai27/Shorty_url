import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "@tanstack/react-router";
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
const DashboardPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Use the 'to' property for TanStack Router
      navigate({ to: '/auth' }); 
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white -mt-20 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Create Short URL</h1>
        <UrlForm />
      </div>
    </div>
  );
};

export default DashboardPage