import React, { useState } from 'react';
import { 
  BookOpen, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Building,
  GraduationCap,
  Briefcase,
  Globe
} from 'lucide-react';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    institution: '',
    department: '',
    position: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  const navigateToLogin = () => {
    // Handle navigation to login page
    console.log('Navigating to login');
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
            Join the Global Research Community
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Connect with researchers, share your work, and advance your career.
          </p>
          <div className="space-y-4 w-full max-w-md">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4">
              <Globe className="text-blue-600 h-8 w-8" />
              <div>
                <h3 className="font-semibold">Global Network</h3>
                <p className="text-sm text-gray-600">Connect with 20M+ researchers worldwide</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg flex items-center space-x-4">
              <BookOpen className="text-blue-600 h-8 w-8" />
              <div>
                <h3 className="font-semibold">Research Impact</h3>
                <p className="text-sm text-gray-600">Share your work with a global audience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-xl backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold text-center mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Join ResearchGate to connect with peers and share your research
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Academic Email Address"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create Password"
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

              <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Institution"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Department"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Position"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
              >
                <span>Create Account</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">Already have an account?</p>
              <button 
                onClick={navigateToLogin}
                className="mt-2 text-blue-600 hover:underline font-medium"
              >
                Sign in to ResearchGate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;