export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface ApiError {
  message: string;
  error?: string;
}

const API_URL = 'http://localhost:5000'; 

// ------- REGISTER
export async function register(data: RegisterData): Promise<AuthResponse | ApiError> {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return errorData as ApiError;
    }

    const responseData = await response.json();
    return responseData as AuthResponse;
  } catch (error) {
    console.error('Network Error:', error);
    return { message: 'Network error occurred' } as ApiError;
  }
}


// ------- LOGIN
export async function login(data: LoginData): Promise<AuthResponse | ApiError> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      return errorData;
    }

    const result: AuthResponse = await response.json();
    return result;
  } catch (error) {
    return { message: 'An error occurred', error: String(error) };
  }
}


// ------- LOGOUT
export async function logout(): Promise<void> {
  try {
    
    // Optionally notify backend
    await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any necessary authentication headers if required
      },
    });
    
    // Remove token from local storage
    localStorage.removeItem('token');

    // Remove token from cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
  } catch (error) {
    console.error('Logout failed:', error);
    // Handle error, e.g., show a notification to the user

  }
}


