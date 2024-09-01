'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginData, AuthResponse, ApiError } from '../services/auth.service';

export default function LoginForm() {
  const router = useRouter(); // Initialize the router

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const loginData: LoginData = { email, password };
      const response = await login(loginData);

      // Log the response for debugging purposes
      console.log('API Response:', response);

      // Check if the response is of type AuthResponse
      if ('token' in response && 'name' in response && 'email' in response) {

        // Store token and user data
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          name: response.name,
          email: response.email
        })); // Store user data as plain object

        console.log('Login successful');
        // console.log('User: ', JSON.stringify({
        //   name: response.name,
        //   email: response.email
        // }));
        // Redirect to the dashboard page
        router.push('/dashboard');
      } else {
        // Handle API error responses
        const apiError = response as ApiError;
        throw new Error(apiError.message || 'Unexpected error occurred.');
      }
    } catch (error) {
      // Handle any errors that occurred during login or data processing
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <form id="login-form" name="login-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="antialiased text-xl text-gray-800 md:text-3xl md:leading-normal text-center font-semibold">
        LOGIN
      </p>
      <p className="antialiased text-sm text-gray-800 md:text-lg md:leading-normal text-center">Nice to see you again!</p>
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
        {loading ? 'Logging in...' : 'Log in'}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
}





