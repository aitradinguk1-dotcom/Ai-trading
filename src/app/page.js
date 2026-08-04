'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, User, ShieldCheck, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    refCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // فی الحال کلائنٹ سائڈ نیویگیشن
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen flex flex-col justify-between items-center px-4 py-8 max-w-md mx-auto">
      {/* Header / Brand */}
      <div className="text-center mt-6 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-4 text-blue-500">
          <TrendingUp size={36} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">AI TRADING</h1>
        <p className="text-sm text-gray-400 mt-1">Smart Automated Staking Platform</p>
      </div>

      {/* Auth Card */}
      <div className="w-full bg-brand-card border border-gray-800 rounded-2xl p-6 shadow-2xl backdrop-blur-lg">
        {/* Auth Toggle Tabs */}
        <div className="flex bg-gray-900/60 p-1 rounded-xl mb-6 border border-gray-800">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              !isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
            }`}
          >
            Register
          </button>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 text-gray-500" size={18} />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-900/80 border border-gray-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 text-gray-500" size={18} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-gray-900/80 border border-gray-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {!isLogin && (
            <>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 text-gray-500" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-gray-900/80 border border-gray-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1.5 font-medium">Referral Code (Optional)</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Enter Sponsor Code"
                    value={formData.refCode}
                    onChange={(e) => setFormData({ ...formData, refCode: e.target.value })}
                    className="w-full bg-gray-900/80 border border-gray-700/80 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-2"
          >
            {isLogin ? 'Log In to Dashboard' : 'Create Account'}
          </button>
        </form>
      </div>

      {/* Trust & Live Metrics Section (خاص آپ کی کی گئی ضرورت) */}
      <div className="w-full grid grid-cols-2 gap-4 mt-8">
        <div className="bg-brand-card/70 border border-gray-800 rounded-2xl p-4 text-center">
          <div className="inline-flex p-2 rounded-lg bg-blue-500/10 text-blue-400 mb-2">
            <Users size={22} />
          </div>
          <div className="text-xl font-extrabold text-white">1M+</div>
          <div className="text-xs text-gray-400 font-medium mt-0.5">Active Users</div>
        </div>

        <div className="bg-brand-card/70 border border-gray-800 rounded-2xl p-4 text-center">
          <div className="inline-flex p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
            <DollarSign size={22} />
          </div>
          <div className="text-xl font-extrabold text-white">$500M+</div>
          <div className="text-xs text-gray-400 font-medium mt-0.5">Total Deposited</div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs text-gray-500 mt-8 flex items-center justify-center gap-1.5">
        <ShieldCheck size={14} className="text-emerald-500" /> Secure 256-Bit SSL Encrypted Platform
      </div>
    </main>
  );
}
