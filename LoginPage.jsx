import React, { useState } from 'react';
import { BookOpen, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const LoginPage = ({ onNavigateToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Branding Section */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8">
          <div className="flex items-center mb-8">
            <BookOpen className="text-blue-600 h-16 w-16" />
            <span className="ml-4 text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ResearchGate
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Welcome Back to ResearchGate
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Continue your research journey with the world's leading research network.
          </p>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-2xl text-blue-600 mb-1">20M+</h3>
              <p className="text-gray-600 text-sm">Researchers</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
              <h3 className="font-bold text-2xl text-blue-600 mb-1">135M+</h3>
              <p className="text-gray-600 text-sm">Publications</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-xl backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Access your research dashboard
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
              >
                <span>Sign In</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">Don't have an account?</p>
              <button 
                onClick={onNavigateToSignup}
                className="mt-2 text-blue-600 hover:underline font-medium"
              >
                Join ResearchGate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;