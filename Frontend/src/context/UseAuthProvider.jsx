/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from 'react';

// AuthContext for sharing auth state
export const AuthContext = createContext();

// AuthProvider component to provide auth state to children
// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    // Get auth data from localStorage (if exists)
    const initialAuthUser = localStorage.getItem("Admin");

    // Set authUser state based on localStorage data
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        // Provide authUser and setAuthUser to children components
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to access auth state
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
