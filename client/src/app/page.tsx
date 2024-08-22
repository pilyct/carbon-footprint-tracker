'use client';

import Image from 'next/image';
import { useState } from 'react';

import Navbar from './components/Navbar'; 
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen flex-col bg-[#023a46]">
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex-grow flex flex-col justify-center p-6">
        <div className="mt-4 flex flex-col gap-6 md:flex-row">
          {/* Image Section */}
          <div className="flex justify-center md:w-[60%] md:order-1 order-1">
            <Image
              src="/sustainability.jpg"
              width={1100}
              height={880}
              className="w-full h-auto md:w-[90%] md:h-auto md:block"
              alt="Woman carrying a plant"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-12 md:w-[30%] md:px-16 md:order-2 order-2 min-h-[60vh]">
            <p className="antialiased text-xl text-gray-800 md:text-3xl md:leading-normal text-center md:text-left">
              Welcome to <strong>Carbon Footprint Tracker</strong>
            </p>

            {isLogin ? <LoginForm /> : <RegisterForm />}

            <p className="text-sm text-gray-600 text-center md:text-left">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <span
                className="ml-1 cursor-pointer text-emerald-600 hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Register here' : 'Log in here'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


