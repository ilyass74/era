import React, { useState } from 'react';
import { 
  BookOpen, 
  Mail, 
  Lock,
  Eye, 
  EyeOff, 
  ArrowRight, 
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

const PasswordRecovery = () => {
  const [step, setStep] = useState('request'); // request, verification, reset, success
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate email verification code sending
    setStep('verification');
    setError('');
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    // Verify code and proceed to reset
    setStep('reset');
    setError('');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Reset password logic here
    setStep('success');
    setError('');
  };

  const handleBackToLogin = () => {
    // Navigate back to login
    console.log('Navigate to login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="text-blue-600 h-12 w-12" />
            <span className="ml-2 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ResearchGate
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {step === 'request' && 'Reset Your Password'}
            {step === 'verification' && 'Enter Verification Code'}
            {step === 'reset' && 'Create New Password'}
            {step === 'success' && 'Password Reset Complete'}
          </h2>
          <p className="text-gray-600 mt-2">
            {step === 'request' && 'Enter your email to receive a verification code'}
            {step === 'verification' && 'We sent a code to your email'}
            {step === 'reset' && 'Choose a strong password'}
            {step === 'success' && 'Your password has been successfully reset'}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-600">
              <AlertCircle size={20} className="mr-2" />
              {error}
            </div>
          )}

          {step === 'request' && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
              >
                <span>Send Reset Code</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {step === 'verification' && (
            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center text-2xl tracking-widest"
                  maxLength={6}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all"
              >
                Verify Code
              </button>
              <p className="text-center text-sm text-gray-600">
                Didn't receive the code? 
                <button type="button" className="ml-2 text-blue-600 hover:underline">
                  Resend
                </button>
              </p>
            </form>
          )}

          {step === 'reset' && (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
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
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all"
              >
                Reset Password
              </button>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <p className="text-gray-600 mb-6">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <button
                onClick={handleBackToLogin}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Login</span>
              </button>
            </div>
          )}

          {step !== 'success' && (
            <div className="mt-6 text-center">
              <button
                onClick={handleBackToLogin}
                className="text-gray-600 hover:text-blue-600 text-sm"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;