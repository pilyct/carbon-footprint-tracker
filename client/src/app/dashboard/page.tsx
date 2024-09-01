'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 
import { logout, AuthResponse } from '../services/auth.service';
import LogoutModal from '../components/LogoutModal';

// Define User type based on AuthResponse structure
type User = {
  id: string;
  name: string;
  email: string;
};

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Manage loading state
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  useEffect(() => {
    const fetchUserData = () => {
      const storedUser = localStorage.getItem('user');
      
      if (storedUser) {
        try {
          // Parse and validate user data
          const parsedUser: User = JSON.parse(storedUser);

          if (parsedUser && parsedUser.name && parsedUser.email) {
            setUser(parsedUser);
          } else {
            console.error('Invalid user data:', parsedUser);
            setUser(null);
          }
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUser(null);
        }
      } else {
        console.warn('No user data found in localStorage.');
        setUser(null);
      }
      
      setLoading(false); // End loading state after data retrieval
    };

    fetchUserData(); // Fetch user data on component mount
  }, []);

  const handleLogoutClick = () => {
    setIsModalOpen(true); // Show the confirmation modal
  };

  const handleLogoutConfirm = async () => {
    setIsModalOpen(false); // Hide the modal
    try {
      await logout();
      console.log('Logout successful');

      // Clear user data from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Redirect to the login page
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLogoutCancel = () => {
    setIsModalOpen(false); // Hide the modal if user cancels
  };

  // Retrieve welcome message from query parameters
  const welcomeMessage = searchParams.get('welcome');

  return (
    <div className="min-h-screen bg-[#023a46] p-6 flex flex-col items-start justify-start text-white">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {loading ? (
        <p className="text-lg">Loading user data...</p> // Display loading message
      ) : user ? (
        <h3 className="text-xl font-semibold mb-4">
          {welcomeMessage ? (
            <span>
              <span className="text-white">Welcome to your dashboard, </span>
              <span className="text-emerald-500">{user.name} 🌱</span>
            </span>
          ) : (
            <span>
              <span className="text-white">Welcome back, </span>
              <span className="text-emerald-500">{user.name} 🌱</span>
            </span>
          )}
        </h3> // Display user's name with green color
      ) : (
        <p className="text-lg">No user data available. Please log in again.</p> // Handle no user data case
      )}
      <p className="text-sm mb-4">You will be logged out after 30 minutes of inactivity.</p>
      <button 
        onClick={handleLogoutClick} 
        className='rounded-lg bg-emerald-500 px-4 py-3 text-white hover:bg-emerald-600 text-sm'
      >
        Log out
      </button>

      <LogoutModal 
        isOpen={isModalOpen} 
        onClose={handleLogoutCancel} 
        onConfirm={handleLogoutConfirm} 
      />
    </div>
  );
}
