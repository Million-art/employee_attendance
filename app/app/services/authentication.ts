// // services/authentication.js

// import { setCookie, removeCookie } from './cookieService'; // You might have a separate cookie service
// import { loginUser, registerUser, logoutUser, getCurrentUser } from './userService'; // Your user service for database interactions

// const COOKIE_NAME = 'authToken'; // Customize the cookie name as needed

// // Function to authenticate a user during login
// export const login = async (email, password) => {
//   try {
//     const user = await loginUser(email, password); // Authenticate user against the database
//     if (user) {
//       setCookie(COOKIE_NAME, user.authToken, { maxAge: 3600, httpOnly: true }); // Set an HTTP-only cookie for authentication
//     }
//     return user;
//   } catch (error) {
//     console.error('Login failed:', error.message);
//     throw error;
//   }
// };

// // Function to register a new user
// export const register = async (userData) => {
//   try {
//     const user = await registerUser(userData); // Create a new user in the database
//     if (user) {
//       setCookie(COOKIE_NAME, user.authToken, { maxAge: 3600, httpOnly: true });
//     }
//     return user;
//   } catch (error) {
//     console.error('Registration failed:', error.message);
//     throw error;
//   }
// };

// // Function to log out a user
// export const logout = () => {
//   removeCookie(COOKIE_NAME); // Remove the authentication cookie
//   return logoutUser(); // Perform any additional logout-related tasks (e.g., invalidate sessions)
// };

// // Function to get the current authenticated user
// export const getCurrentAuthenticatedUser = async () => {
//   try {
//     const authToken = getCookie(COOKIE_NAME);
//     if (!authToken) {
//       return null;
//     }

//     // You might want to decode the JWT or verify it here to get user information
//     const currentUser = await getCurrentUser(authToken);
//     return currentUser;
//   } catch (error) {
//     console.error('Error fetching current user:', error.message);
//     throw error;
//   }
// };
