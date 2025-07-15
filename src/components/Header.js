import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">🏕️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-800">Profil Citoyen</h1>
              <p className="text-sm text-secondary-600">Gérez vos missions bénévoles</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-secondary-600 bg-success-50 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></span>
              <span>En ligne</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;