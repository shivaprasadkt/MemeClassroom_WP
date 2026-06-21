import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, profile, onboardingUser, loading } = useAuth();

  // If loading, show a loading spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  // If user is partially logged in (Google onboarding intercept)
  if (onboardingUser) {
    return <Navigate to="/auth" replace />;
  }

  // If user is not logged in at all, redirect to Auth page
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // If role checks are required and the profile lacks the correct role, redirect to Home
  if (allowedRoles && (!profile || !allowedRoles.includes(profile.role))) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
