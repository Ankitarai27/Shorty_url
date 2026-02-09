import React from 'react';
import { Link } from '@tanstack/react-router';
import UserUrl from '../components/UserUrl';

const HistoryPage = () => {
  return (
    // Adding a unique key helps React reset the DOM properly on navigation
    <div key="history-page-root" className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Link History</h1>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all shadow-sm"
          >
            ← Back to Shortener
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2">
          <UserUrl />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;