'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, RegisterData, AuthResponse, ApiError } from '../services/auth.service';

export default function RegisterForm() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 4 && /\d/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 4 characters long and contain at least one number.');
      setLoading(false);
      return;
    }

    const registerData: RegisterData = { name, email, password };

    try {
      const response = await register(registerData);

      if ('token' in response  && 'name' in response && 'email' in response) {
        
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          name: response.name,
          email: response.email
        }));

        console.log('Register successful');
        // console.log('User: ', JSON.stringify({
        //   name: response.name,
        //   email: response.email
        // }));

        router.push(`/dashboard?welcome=hello`);
      } else {
        const apiError = response as ApiError;
        console.error('API Error:', apiError);
        setError(apiError.message || 'Unexpected error occurred.');
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="register-form" name="register-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="antialiased text-xl text-gray-800 md:text-3xl md:leading-normal text-center font-semibold">
        REGISTER
      </p>
      <p className="antialiased text-sm text-gray-800 md:text-lg md:leading-normal text-center">Create your account now.</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-black"
        autoComplete="on"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-black"
        autoComplete="on"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 text-black"
        autoComplete="on"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-500 px-4 py-3 text-white hover:bg-emerald-600 text-sm"
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
}
