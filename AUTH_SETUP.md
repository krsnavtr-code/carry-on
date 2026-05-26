# Authentication System Setup Guide

This document explains how to set up and use the authentication system for the Carry-On Car Rental application.

## Overview

The authentication system supports three user roles:

- **User**: Regular customers who can book cars
- **Vendor**: Car owners who can list their cars for rent
- **Admin**: Administrators with full system access (created manually in database)

## Backend Setup

### 1. Environment Variables

Copy the `.env.example` file in the `server` directory to `.env` and update the following:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# JWT Secret (IMPORTANT: Change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/carryon-car-rental
```

### 2. Install Dependencies

```bash
cd server
npm install
```

### 3. Start the Server

```bash
npm run dev
```

The server will run on `http://localhost:5001`

## Frontend Setup

### 1. Environment Variables

Create a `.env.local` file in the `client` directory with the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### 2. Install Dependencies

```bash
cd client
npm install
```

### 3. Start the Client

```bash
npm run dev
```

The client will run on `http://localhost:3000`

## API Endpoints

### Public Routes

- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, password, role, phone }`
  - Role can be: `user` or `vendor` (admin cannot be created through registration)

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`

### Protected Routes (Require JWT Token)

- `GET /api/auth/me` - Get current user
  - Headers: `Authorization: Bearer <token>`

- `PUT /api/auth/profile` - Update user profile
  - Body: `{ name, phone, avatar }`
  - Headers: `Authorization: Bearer <token>`

- `PUT /api/auth/password` - Change password
  - Body: `{ currentPassword, newPassword }`
  - Headers: `Authorization: Bearer <token>`

## Creating an Admin User

Admin users cannot be created through the registration form. There are two ways to create an admin user:

### Method 1: Using the Create Admin Script (Recommended)

Run the following command from the server directory:

```bash
npm run create-admin
```

This will create an admin user with:

- Email: `admin@carry-on.in`
- Password: `admin123`

**IMPORTANT**: Change the password after first login!

### Method 2: Manual Database Insertion

1. Connect to your MongoDB database
2. Insert a user document with role "admin"
3. The password will be automatically hashed by the User model

Example using MongoDB shell:

```javascript
db.users.insertOne({
  name: "Admin User",
  email: "admin@carry-on.in",
  password: "admin123", // Will be hashed automatically
  role: "admin",
  isVerified: true,
});
```

## Middleware

The following middleware are available for route protection:

- `protect`: Verifies JWT token and adds user to request
- `admin`: Only allows access to admin users
- `vendor`: Only allows access to vendor or admin users
- `userOrAdmin`: Only allows access to user or admin users

Example usage in routes:

```javascript
import { protect, admin, vendor } from "../middlewares/auth.js";

router.get("/admin-only", protect, admin, adminController);
router.get("/vendor-only", protect, vendor, vendorController);
```

## Features Implemented

### Backend

- User model with role-based access control
- JWT authentication with 30-day token expiration
- Password hashing with bcryptjs
- Authentication middleware for route protection
- Role validation during registration (only user and vendor allowed)

### Frontend

- AuthContext for global authentication state management
- Login page with email and password
- Registration page with role selection (User/Vendor only)
- Navbar shows login/register buttons when not authenticated
- Navbar shows user dropdown with logout when authenticated
- Mobile-responsive auth UI
- Token and user data stored in localStorage

## Security Notes

1. **JWT Secret**: Always use a strong, random JWT_SECRET in production
2. **Password Hashing**: Passwords are automatically hashed using bcryptjs
3. **Token Storage**: Tokens are stored in localStorage (consider using httpOnly cookies for production)
4. **HTTPS**: Always use HTTPS in production
5. **Environment Variables**: Never commit `.env` files to version control

## Testing the System

1. Start both the server and client
2. Navigate to `http://localhost:3000/auth/register`
3. Create a new account with role "User" or "Vendor"
4. Login with the created credentials
5. Verify that the navbar shows the user information
6. Logout and verify that the navbar shows login/register buttons

## Troubleshooting

### "Not authorized, token failed" error

- Ensure JWT_SECRET is set in server .env file
- Check that the token is being sent in the Authorization header

### "User already exists" error

- This means the email is already registered in the database
- Try logging in instead or use a different email

### MongoDB connection error

- Ensure MongoDB is running
- Check MONGODB_URI in server .env file
- Verify the database connection string is correct

## Next Steps

To further enhance the authentication system:

1. Add email verification
2. Implement password reset functionality
3. Add OAuth (Google, Facebook) login
4. Implement two-factor authentication
5. Add rate limiting to prevent brute force attacks
6. Use httpOnly cookies instead of localStorage for token storage
